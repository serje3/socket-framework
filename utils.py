import os
from database import StyleManagerDB, JSManagerDB, AuthManagerDB
from bs4 import BeautifulSoup
from settings import STATIC_DIRS
from errors import HTTP405

def link_parser_style(link, database):
    url = None
    server_path = None
    if not link['href'].startswith('/static/css/'):
        url = '/static/css/' + link['href'].split('.')[0]
        server_path = STATIC_DIRS.get('general', '') + STATIC_DIRS.get('css_files', '') + link['href']
    if not ((url is None) or (server_path is None)):
        database.insert(url, server_path)
        return url
    return None

def script_parser_js(script, database):
    url = None
    server_path = None
    if script.get('src','')!='' and not script.get('src','').startswith('/static/js/'):
        url = '/static/js/' + script['src'].split('.')[0]
        server_path = STATIC_DIRS.get('general', '') + STATIC_DIRS.get('js_files', '') + script['src']
    if not ((url is None) or (server_path is None)):
        database.insert(url, server_path)
        return url
    return None

def soup_parser_style(html_doc):
    soup = BeautifulSoup(html_doc, 'html.parser')
    links = soup.find_all('link')

    database = StyleManagerDB()

    for i in range(len(links)):
        if links[i]['href'].startswith('http'):
            continue
        url = link_parser_style(links[i], database)
        if not url is None:
            if url == '/static/js/'+links[i]['href'].split('.')[0]:
                continue
            links[i]['href']=url
            links[i]['type']='text/css'

    database.close_connection()

    return str(soup)


def soup_parser_js(html_doc):
    soup = BeautifulSoup(html_doc, 'html.parser')
    scripts = soup.find_all('script')
    database = JSManagerDB()

    for i in range(len(scripts)):
        if scripts[i].get('src','none')=='none':
            continue
        if scripts[i]['src'].startswith('http'):
            continue
        url = script_parser_js(scripts[i],database)
        if not url is None:
            if scripts[i]['src'] == '/static/js/'+scripts[i]['src'].split('.')[0]:
                continue
            scripts[i]['src']=url
            scripts[i]['type']='text/javascript'

    database.close_connection()
    return str(soup)


def overwrite_html(filename,type):
    final_html=None

    with open('templates/' + filename, 'r', encoding='utf-8') as html:
        text = html.read()
        if type == 'css':
            final_html=soup_parser_style(text)
        elif type == 'js':
            final_html=soup_parser_js(text)
    with open('templates/' + filename, 'w', encoding='utf-8') as html:
        html.write(final_html)


def templates_parser():
    for filename in os.listdir('templates/'):
        if os.path.isdir('templates/'+filename):
            for file in os.listdir('templates/'+filename):
                overwrite_html(filename+'/'+file, 'css')
                overwrite_html(filename+'/'+file, 'js')
        else:
            overwrite_html(filename,'css')
            overwrite_html(filename,'js')


def ishtmlvalid(template: str):
    file = template.split('.')
    if file[-1] == 'html':
        return True


def iscssvalid(template: str):
    file = template.split('.')
    if file[-1] == 'css':
        return True


def isjsvalid(template: str):
    file = template.split('.')
    if file[-1] == 'js':
        return True


def login_required(view):
    def wrapper(request):
        db = AuthManagerDB()
        user = db.get_by_token(request.get('token', ''))
        if user is None:
            return HTTP405()
        else:
            request['user']=user
            return view(request)
    return wrapper