$(document).ready(function () {
    getRoomsAsync.then(()=> {
        socket.emit('connect_to_rooms_page')
        preloader_stop()
    })
})

const socket = io('ws://localhost:3000', { transport: ['websocket']})


socket.on('set_disabled_selects',(data)=>{
    const rows = data.rows
    console.log(rows)
    for(let i = 0; i<data.rows.length;i++){
        console.log(rows[i])
        const option_index =  array_colors.indexOf(rows[i].color)
        const select = document.getElementById(`color-select-tag-${rows[i].id}`)
        console.log(`color-select-tag-${rows[i].id}`)
        if (select!==null)
            select.options[option_index].disabled = true
    }
})


socket.on('set_select-disable',(data)=>{
    const option_index =  array_colors.indexOf(data.color)
    const select = document.getElementById(`color-select-tag-${data.url}`)
    if (select!==null)
        select.options[option_index].disabled = true
})

socket.on('set_select-enable',(data)=>{
    console.log('set_select-enable', data)
    const option_index =  array_colors.indexOf(data.color)
    const select = document.getElementById(`color-select-tag-${data.url}`)
    if (select!==null)
        select.options[option_index].disabled = false
})


const colors = {
    'Красный':'red',
    'Синий':'blue',
    'Жёлтый':'yellow',
    'Зелёный':'green'
}

const array_colors = ['red','blue','yellow','green']



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
            console.log(result)
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
        <div class="room" id="${id}">
        <div class="room-name">${name}</div>
        <div class="room-owner">${owner}</div>
        <div class="color-select">
        <select id="color-select-tag-${id}">
        <option class="color-select-option">Красный</option>
        <option class="color-select-option">Синий</option>
        <option class="color-select-option">Жёлтый</option>
        <option class="color-select-option">Зелёный</option>
        </select>
        </div>
        <button onclick="Room.reDirect('${id}')">Войти</button>
        <div id="status-${id}"></div>
        </div>
        `
        // /rooms/${id}
    }

    static reDirect(id){
        const select = document.getElementById(`color-select-tag-${id}`)
        console.log(`color-select-tag-${id}`)

        if (!select.selectedOptions[0].disabled && select.value !== '') {

            socket.emit('set_color',{url:id,username:user.name,color:colors[select.value]})
            window.location.href = `/rooms/${id}`
        }
        else{
            document.getElementById(`status-${id}`).innerHTML(`Ошибка - место занято, либо комната заполнена`)
        }

    }

}

