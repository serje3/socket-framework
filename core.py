import json
import select
import socket
from translators import URLS, styles_urls_to_global_urls, js_urls_to_global_urls
from settings import IP, PORT
from urls import URLS_POST
from wrap import wrap_request

INPUTS=[]
OUTPUTS=[]


def before_accept():
    from utils import templates_parser
    templates_parser()
    styles_urls_to_global_urls()
    js_urls_to_global_urls()


def parse_request(request):
    parsed = request.split(' ')
    try:
        method, url = (parsed[0], parsed[1])
    except IndexError:
        method, url = ('None', 'None')
    return method, url


def generate_headers(method, url):
    if (method not in ('GET', 'POST')) or (method == 'POST' and url not in URLS_POST):
        return 'HTTP/1.1 405 Method not allowed\n\n', 405

    if url not in URLS and url not in URLS_POST:
        return 'HTTP/1.1 404 Not found\n\n', 404

    if url.startswith('/static/css/'):
        return 'HTTP/1.1 200 OK\r\nContent-Type: text/css; charset=utf-8\n\n', 200
    elif url.startswith('/static/js/'):
        return 'HTTP/1.1 200 OK\r\nContent-Type: text/javascript;charset=UTF-8\n\n', 200

    return 'HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=utf-8;\n\n', 200


def generate_content(code, url, request, post=False):
    if code == 404:
        return '<h1>404</h1><p>Not found</p>'
    if code == 405:
        return '<h1>405</h1><p>Method not allowed</p>'

    if post:
        view = URLS_POST.get(url, lambda x: 'not found')
        print('generate-content -  POST')
        content = view(wrap_request(request))
    elif url.startswith('/static/'):
        view = URLS.get(url, lambda x: 'not found')
        content = view
    else:
        view = URLS.get(url, lambda x: 'not found')
        req = wrap_request(request)
        content = view(req)

    return content


def generate_response(request):
    method, url = parse_request(request)
    headers, code = generate_headers(method, url)
    if method == 'POST':
        body = generate_content(code, url, request, post=True)
        # print('BODY:\n'+body)
        if url in ('/register', '/login', '/logout'):
            Cookie = json.loads(body)['Cookie']
            headers = headers[:len(
                headers) - 2] + '\r\nSet-Cookie:token=' + Cookie + '; Max-Age=2592000\n\n' \
                if Cookie != 'none' else headers

    else:
        body = generate_content(code, url, request)
    return (headers + body).encode('utf-8')


def handle_readables(readables, server_socket):

    for resource in readables:

        # Если событие исходит от серверного сокета, то мы получаем новое подключение
        if resource is server_socket:
            connection, client_address = resource.accept()
            connection.setblocking(0)
            INPUTS.append(connection)
            print("new connection from {address}".format(address=client_address))

        # Если событие исходит не от серверного сокета, но сработало прерывание на наполнение входного буффера
        else:
            data = ""
            try:
                data = resource.recv(1024)

            # Если сокет был закрыт на другой стороне
            except ConnectionResetError:
                pass

            if data:

                # Вывод полученных данных на консоль
                print("getting data: {data}".format(data=str(data)))

                # Говорим о том, что мы будем еще и писать в данный сокет
                if resource not in OUTPUTS:
                    OUTPUTS.append(resource)

            # Если данных нет, но событие сработало, то ОС нам отправляет флаг о полном прочтении ресурса и его закрытии
            else:

                # Очищаем данные о ресурсе и закрываем дескриптор
                clear_resource(resource)




def handle_writables(writables):
    for resource in writables:
        try:
            resource.send(bytes('Hello from server!', encoding='UTF-8'))
        except OSError:
            clear_resource(resource)

def clear_resource(resource):
    if resource in OUTPUTS:
        OUTPUTS.remove(resource)
    if resource in INPUTS:
        INPUTS.remove(resource)
    resource.close()
    print('closing connection ' + str(resource))

def run():
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    server_socket.setblocking(False)
    server_socket.bind((IP, PORT))
    server_socket.listen(10)
    before_accept()
    print(f"HOST: {IP}:{PORT}")

    # while True:
    #     client_socket, addr = server_socket.accept()
    #     request = client_socket.recv(1024)
    #
    #     # print(request.decode('utf-8'))
    #
    #     response = generate_response(request.decode('utf-8'))
    #
    #     client_socket.sendall(response)
    #     client_socket.close()

    while INPUTS:
        readables, writables, exceptional = select.select(INPUTS, OUTPUTS, INPUTS)
        handle_readables(readables, server_socket)
        handle_writables(writables)



if __name__ == '__main__':
    run()
