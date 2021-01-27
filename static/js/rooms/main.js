$(document).ready(function () {
    getRooms()
})


function getRooms() {
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
                console.log(result.rooms,result.rooms.length)
                for (let i = 0; i < result.rooms.length; i++) {
                    const room = new Room(decodeURI(result.rooms[i][0]),result.rooms[i][1],result.rooms[i][2])
                    $('#rooms-list').append(room.html)
                }
            }
        },
        error: function(response) { // Данные не отправлены
            $('#rooms-list').html('Упс... что-то пошло не так');
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
            console.log('успех')
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