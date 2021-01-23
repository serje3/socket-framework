from utils import ishtmlvalid, iscssvalid, isjsvalid


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