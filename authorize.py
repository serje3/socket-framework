import json
from database import AuthManagerDB
from wrap import render
import secrets





def login(request):
    if request['method'] == 'POST':
        db = AuthManagerDB()
        user_login = request['data']['login']
        user_password = request['data']['password']
        answer = db.is_user_exists(user_login, user_password)

        if answer:
            if request.get('token', 'none') != 'none':
                data = db.select_token(user_login, user_password)
                token = data[0][2] if data != [] else 'none'

                return json.dumps({
                    'status': 'success',
                    'Cookie': token
                })
            return json.dumps({
                'status': 'success',
                'Cookie': 'none'
            })
        else:
            return json.dumps({
                'status': 'failed',
                'Cookie': 'none'
            })

    return render('login.html')


def auth_register(user_login, user_password, database):
    token = secrets.token_urlsafe(16)
    return database.insert(user_login, user_password, token)


def register(request):
    if request['method'] == 'POST':
        db = AuthManagerDB()
        if request['data']['password'] != request['data']['password2']:
            return json.dumps({
                'status': 'not equal'
            })

        result = auth_register(request['data']['login'], request['data']['password'], db)
        token = db.select_token(request['data']['login'], request['data']['password'])[0][2]
        return json.dumps({
            'status': result,
            'Cookie': token
        })

    return render('register.html')


def authorized(request):
    if request['method'] == 'POST':
        db = AuthManagerDB()
        user = db.get_by_token(request.get('token', ''))
        if user is None:
            return json.dumps({
                'status': "failed",
            })
        else:
            return json.dumps({
                'status': 'success',
                'user': user
            })


def logout(request):
    if request['method'] == 'POST':
        return json.dumps({
            'status': 'success',
            'Cookie': 'unauthorized'
        })
    # return HTTPRedirect('/')
