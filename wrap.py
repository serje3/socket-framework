from bs4 import BeautifulSoup
from urllib.parse import unquote
from utils import ishtmlvalid, iscssvalid, isjsvalid
import json

def render(template:str):
    if not ishtmlvalid(template):
        return "Error on serverside"

    with open('templates/'+template, encoding='utf-8') as temp:
        html_doc=temp.read()
        return html_doc

def render_css(css_file):
    if not iscssvalid(css_file):
        return "Error on serverside"

    with open(css_file, encoding='utf-8') as temp:
        css_doc=temp.read()
        return css_doc

def render_js(js_file):
    if not isjsvalid(js_file):
        return "Error on serverside"
    with open(js_file, encoding='utf-8') as temp:
        js_doc=temp.read()
        return js_doc


def wrap_request(request):
    method = request.split(' ')[0]
    data = {}
    if method == 'POST':
        data = request.split('\r')[-1].replace('\n','')
        if data[0]=='{':
            data=json.loads(data)
        else:
            queries=data.split('&')
            data={}
            for query in queries:
                variable, value=query.split('=')
                data[variable]=value

    result = {
        'method': method,
        'data': data,
    }


    for header in request.split('\r\n'):
        if header.startswith('Cookie'):
            for value in header.split(':',1)[1].split(';'):
                if value.split('=')[0].strip()=='token':
                    result['token']=value.split('=')[1]
    return result


def HTTPRedirect(url):
    return f"""
        <script type="text/javascript">
        window.location.href = '{url}';
        </script>
    """


def rooms_wrapper(rendered_view,name,owner,id):
    soup = BeautifulSoup(rendered_view,'html.parser')
    title = soup.find('title')
    title.string='Комната ' + id
    h1=soup.new_tag("h1")
    p=soup.new_tag("p")
    h1.string=unquote(name)
    p.string=owner
    soup.append(h1)
    soup.append(p)
    return str(soup)