$(document).ready(function () {
    getRoomsAsync.then(()=>preloader_stop())
})


const getRoomsAsync = new Promise( resolve => {
    getRooms(resolve)
})

function getRooms(resolve) {
    $.ajax({
        url: '/rooms',
        type: "POST",
        dataType: "html",
        data: {
            "query":'get'
        },
        headers:{
            'Content-Type':'charset=utf-8',
        },
        success : function (response) {
            const result = $.parseJSON(response)

            if (result.status === 'success') {
                for (let i = 0; i < result.rooms.length; i++) {
                    const room = new Room(decodeURI(result.rooms[i][0]),result.rooms[i][1],result.rooms[i][2])
                    $('#rooms-list').append(room.html)
                }
            }
            resolve()
        },
        error: function(response) { // Данные не отправлены
            $('#rooms-list').html('Упс... что-то пошло не так');
            resolve()
    	}
    })
}

function addRoom(name) {
    $.ajax({
        url: '/rooms',
        type: "POST",
        dataType: "html",
        data: {
            "query":'add',
            'name':name
        },
        headers:{
            'Content-Type':'charset=utf-8',
        },
        success : function (response) {
            window.location.href='/rooms'
            },
        error: function(response) { // Данные не отправлены
            console.log('Упс... что-то пошло не так');
    	}
    })
}


class Room{
    constructor(name,owner,id) {
        this.html=`
        <div id="room">
        <div id="room-name">${name}</div>
        <div id="room-owner">${owner}</div>
        <a href="/rooms/${id}">Войти</a>
        </div>
        `
    }
}