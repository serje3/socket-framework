import json

from errors import HTTP405, HTTP404
from wrap import render,rooms_wrapper
from utils import login_required
from database import RoomsManagerDB, AuthManagerDB

@login_required
def rooms(request):
    if request['method']=='POST':
        db = RoomsManagerDB()
        if request['data']['query']=='get':
            rooms = db.get_rooms()
            return json.dumps({
                'status':'success',
                'rooms':rooms,
            })
        if request['data']['query']=='add':
            db2=AuthManagerDB()
            db.insert(request['data']['name'],db2.get_by_token(request['token']),db.generate_id())
            return json.dumps({
                'status': 'success',
            })
    return render('rooms.html')


def room(request,id):
    db = AuthManagerDB()
    user = db.get_by_token(request.get('token', ''))
    if user is None:
        return HTTP405()

    content = render('users/room.html')
    db = RoomsManagerDB()
    room = db.select_id(id)
    if not room:
        return HTTP404()
    #print(room)
    room = room[0]
    name = room[0]
    owner = room[1]
    rendered_html=rooms_wrapper(content,name,owner,id)
    return rendered_html