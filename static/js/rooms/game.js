const socket = io('ws://localhost:3000', { transport: ['websocket']})

let status={
    url: window.location.pathname.slice(7)
}

socket.on('connect', () => {
    console.log('connected from client')
    setUsername()
    socket.emit('set_room', {url: status.url} )

});


let _color;


socket.on('user_has_left', username =>{
    console.log('User has left - ',username)
})

socket.on('update_board', data =>{
    if (socket.id !== data.user.id) doStep(data.idTo, data.idFrom)
})

function waitForUsername(then){
    if(typeof user.name !== "undefined"){
        then()
    }
    else{
        setTimeout(waitForUsername, 100, then);
    }
}

socket.on('load_board_state', data=>{
    if (data.html!=='') {
        const chess_table = document.getElementById('chess-table')
        chess_table.outerHTML = data.html
    }
    addListenersToTiles()
    deleteHints()
    waitForUsername(()=>{
        console.log(user.name)
        refreshChessTable()
        socket.emit('get_color',{url:status.url,user:user.name})
        preloader_stop()
    })

})


socket.on('set_player',(data)=>{
    const colorized_piecesList = piecesList.map((value => {
        return value+'_'+data.color
    }))
    colorized_piecesList.forEach((value => {
        const pieces = document.getElementsByClassName(value)
        for (let i = 0; i<pieces.length;i++){
            pieces[i].setAttribute('onclick',`showHints(this)`)
        }
    }))


    const colorsAngle={
        'red':0,
        'blue':-90,
        'yellow':180,
        'green':90,
    }

    const chess_board = document.getElementById('chess-table')
    chess_board.style.transform=`rotate(${colorsAngle[data.color]}deg)`
    const imgs = document.getElementsByTagName('img')

    for (let i = 0; i < imgs.length; i++){
        if (imgs[i]!== undefined && imgs[i].alt==='chess_piece'){
            imgs[i].style.transform=`rotate(${-colorsAngle[data.color]}deg)`
        }

    }
})

function setUsername() {
    socket.emit('set_username',{name:user.name})
}



