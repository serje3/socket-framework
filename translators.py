from database import StyleManagerDB, JSManagerDB
from urls import URLS


def styles_urls_to_global_urls():
    db = StyleManagerDB()
    urls = db.select_all()

    from wrap import render_css
    for url,server_path in urls:
        view = render_css(server_path)
        URLS[url]=view


def js_urls_to_global_urls():
    db = JSManagerDB()
    urls = db.select_all()

    from wrap import render_js
    for url, server_path in urls:
        view = render_js(server_path)
        URLS[url] = view
