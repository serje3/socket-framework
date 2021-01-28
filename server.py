# python3
import socket
import threading
from core import generate_response, before_accept
from settings import IP, PORT


def serve_client(client_socket):
    try:
        request = client_socket.recv(1024)
    except ConnectionResetError:
        # Соединение было неожиданно разорвано.
        request = None

    if request is not None:
        response = generate_response(request.decode('utf-8'))
        #print(request.decode('utf-8'))
        client_socket.sendall(response)
        client_socket.close()

#asynchronous
def run():
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM, proto=0)
    server_socket.bind((IP, PORT))
    server_socket.listen()

    before_accept()
    print('\tIP:'+IP,'\n\tPORT: '+str(PORT))
    while True:
        client_socket, addr = server_socket.accept()

        t = threading.Thread(target=serve_client,
                             args=(client_socket,))
        t.start()



if __name__ == '__main__':
    run()
