import json

import socket
from translators import URLS, styles_urls_to_global_urls, js_urls_to_global_urls
from settings import IP, PORT
from urls import URLS_POST, ROOMS_RENDER
from wrap import wrap_request

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

    if url.startswith('/rooms/'):
        return 'HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=utf-8;\n\n', 200

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


    if url.startswith('/static/'):
        view = URLS.get(url, lambda x: 'not found')
        content = view
    elif url.startswith('/rooms/'):
        view = ROOMS_RENDER

        content = view(wrap_request(request),url.replace('/rooms/',''))
    elif post:
        view = URLS_POST.get(url, lambda x: 'not found')
        #print('generate-content -  POST')
        content = view(wrap_request(request))
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



#synchronous
def run():
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.setblocking(False)
    server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    server_socket.bind((IP, PORT))
    server_socket.listen(10)
    before_accept()
    print(f"HOST: {IP}:{PORT}")

    while True:
        client_socket, addr = server_socket.accept()
        request = client_socket.recv(1024)

        # print(request.decode('utf-8'))

        response = generate_response(request.decode('utf-8'))

        client_socket.sendall(response)
        client_socket.close()

if __name__ == '__main__':
    run()
