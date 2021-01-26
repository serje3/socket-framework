import psycopg2
from urllib.parse import urlparse
from settings import URL_DATABASE


def _parse_db_url(url):
    unparsed = urlparse(url)
    return unparsed


class ManagerDB:
    def __init__(self):
        db_config = _parse_db_url(URL_DATABASE)
        self.connection = psycopg2.connect(
            database=db_config.path[1:],
            user=db_config.username,
            password=db_config.password,
            host=db_config.hostname
        )

    def close_connection(self):
        if not self.connection.closed:
            self.connection.close()


class StyleManagerDB(ManagerDB):
    def __init__(self):
        super().__init__()
        cursor = self.connection.cursor()
        cursor.execute("""
        CREATE TABLE IF NOT EXISTS styles(
            url text PRIMARY KEY NOT NULL,
            server_path text NOT NULL
        )
        """)
        self.connection.commit()
        cursor.close()

    def select_all(self):
        cursor = self.connection.cursor()
        cursor.execute("""SELECT * FROM styles """)
        result = cursor.fetchall()
        cursor.close()
        return result

    def select_url(self, url):
        cursor = self.connection.cursor()
        cursor.execute("""
        SELECT * FROM styles WHERE url=%s 
        """, (url, ))
        result = cursor.fetchall()
        cursor.close()
        return result

    def insert(self,url,server_path):
        cursor = self.connection.cursor()

        if self.select_url(url) != []:
            print("[Warning] This css file was added to database before with this url: ", url)
            return

        cursor.execute("""
            INSERT INTO styles(url,server_path) VALUES (%s,%s)
        """, (url,server_path, ))

        self.connection.commit()
        cursor.close()


class JSManagerDB(ManagerDB):
    def __init__(self):
        super(JSManagerDB, self).__init__()
        cursor = self.connection.cursor()
        cursor.execute("""
                CREATE TABLE IF NOT EXISTS js(
                    url text PRIMARY KEY NOT NULL,
                    server_path text NOT NULL
                )
                """)
        self.connection.commit()
        cursor.close()

    def select_all(self):
        cursor = self.connection.cursor()
        cursor.execute("""SELECT * FROM js""")
        result = cursor.fetchall()
        cursor.close()

        return result

    def select_url(self, url):
        cursor = self.connection.cursor()
        cursor.execute("""
        SELECT * FROM js WHERE url=%s 
        """, (url, ))
        result = cursor.fetchall()
        cursor.close()

        return result

    def insert(self,url,server_path):
        cursor = self.connection.cursor()

        if self.select_url(url) != []:
            print("[Warning] one of js files was added to database before with this url: ", url)
            return

        cursor.execute("""
            INSERT INTO js(url,server_path) VALUES (%s,%s)
        """, (url,server_path, ))

        self.connection.commit()
        cursor.close()


class AuthManagerDB(ManagerDB):
    def __init__(self):
        super().__init__()
        cursor = self.connection.cursor()
        cursor.execute("""
                   CREATE TABLE IF NOT EXISTS auth(
                       login text PRIMARY KEY NOT NULL,
                       password text NOT NULL,
                       token text NOT NULL
                   )
                   """)
        self.connection.commit()
        cursor.close()

    def is_user_exists(self,login,password):
        cursor = self.connection.cursor()
        cursor.execute("""
                SELECT * FROM auth WHERE login=%s and password=%s
                """, (login,password, ))

        result = cursor.fetchall()
        cursor.close()
        if result != []:
            return True
        else:
            return False

    def select_token(self,login,password):
        cursor = self.connection.cursor()
        cursor.execute("""
                SELECT * FROM auth WHERE login=%s and password=%s
                """, (login,password, ))
        result = cursor.fetchall()
        cursor.close()
        return result

    def select_login(self, login):
        cursor = self.connection.cursor()
        cursor.execute("""
        SELECT * FROM auth WHERE login=%s 
        """, (login, ))
        result = cursor.fetchall()
        cursor.close()
        return result

    def insert(self,login,password, token):
        cursor = self.connection.cursor()

        if self.select_login(login) != []:
            return "failed"

        cursor.execute("""
            INSERT INTO auth(login,password,token) VALUES (%s,%s,%s)
        """, (login,password,token, ))

        self.connection.commit()
        cursor.close()

        return "success"

    def get_by_token(self,token):
        cursor = self.connection.cursor()
        cursor.execute("""
                SELECT * FROM auth WHERE token=%s 
                """, (token,))
        result = cursor.fetchall()
        cursor.close()
        if result != []:
            return result[0][0]

