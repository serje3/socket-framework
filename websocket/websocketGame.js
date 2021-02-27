process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const SOCKETIO_PORT = 3000

const io = require('socket.io')(SOCKETIO_PORT,{
  cors: {
    origin: "http://localhost:5000",
    credentials: true
  }
})
const {Pool, Client} = require('pg')

const pool = new Pool({
    user: "USER",
    password: "PASSWORD",
    database: "DB",
    port: 5432,
    host: "HOST",
    ssl:true
})

pool.connect()

const update_board_state = (roomExists,data)=>{
        let query,values
        if (roomExists){
            query = `UPDATE chess_table SET html = $1 WHERE room = $2`
            values = [data.html,data.url]
        }
        else {
            query = 'INSERT INTO chess_table(room, html) VALUES($1,$2)'
            values = [data.url, data.html]
        }
        pool
            .query(query,values)
            .then(res => {
                console.log(res.rows[0])
            })
            .catch(err => {
                console.error(err.stack)
            })
}


io.on('connection', socket => {
    console.log('connected to server')
    socket.user = {}


    socket.on("set_username", (user) => {
        socket.user.name = user.name;
        console.log(socket.user.name)
    });

    socket.on('connect_to_rooms_page',()=>{
        socket.join('rooms_page')
        pool.query('SELECT * FROM colors')
            .then(res => {
                if(res.rows.length!==0)
                {
                    io.to('rooms_page').emit('set_disabled_selects',{rows:res.rows})
                }
            })
    })

    socket.on('set_room', (data) => {

        socket.join(data.url)
        socket.user.room = data.url

        pool.query('SELECT * FROM chess_table WHERE room=$1',[data.url])
            .then(res => {
                let data;
                if (res.rows.length!==0)
                    data = {html:res.rows[0].html}
                else
                    data={html:''}

                socket.emit('load_board_state',data)
            })
            .catch(err => {
                console.error(err.stack)
            })

    })

    socket.on('get_color',(data)=>{
        pool.query('SELECT * FROM colors WHERE id=$1 and "user"=$2',[data.url,data.user])
            .then(res=>{
                if (res.rows.length !== 0) {
                    console.log('get_color - ', res.rows)
                    console.log('data get_color - ', data.url, data.user)
                    socket.emit('set_player', {color: res.rows[0].color})
                }
                else{
                    console.log('ОН ОПЯТЬ БЛЯТЬ ПУСТОЙ')
                }
            })
    })

    socket.on('set_color', data =>{
        pool.query('SELECT * FROM colors WHERE id=$1 and user=$2',[data.url,data.user])
            .then(res => {
                updateColors(data.url,data.username,data.color,res)
                io.to('rooms_page').emit('set_select-disable',{color:data.color, url:data.url})
            })
            .catch(err => {
                console.error(err.stack)
            })
    })

    // socket.on('get_root', (data)=>{
    //     console.log('room - ',io.sockets.adapter.rooms.get(data.url), data.url, socket.id)
    //     const room = io.sockets.adapter.rooms.get(data.url)
    //     if (room.size>1){
    //         for(let i=0;i<room.size;i++){
    //             if(room[i]===socket.id){
    //                 continue
    //             }
    //             io.to(room[i]).emit('')
    //             break
    //         }
    //     }
    // })

    socket.on('save_board_state', data=>{
        let roomExists = false
        pool.query('SELECT * FROM chess_table WHERE room=$1',[data.url])
            .then(res => {
                if (res.rows.length !== 0) roomExists = true
                update_board_state(roomExists,data)
            })
            .catch(err => {
                console.error(err.stack)
            })

    })

    socket.on('step', data => {

        if (socket.rooms.has(data.url)){
            data.user= {
                name:socket.user.name,
                id:socket.id
            }
            io.to(data.url).emit('update_board', data)
        }
        // в else можно записать ошибку, но потом
    })


    socket.on("disconnecting", (reason) => {
    for (const room of socket.rooms) {
      if (room !== socket.id && room !=='rooms_page') {
        socket.to(room).emit("user_has_left", socket.user.name);
      }
    }
  });



})


function updateColors(id,user,color, res){
     let query,values
        if (res.rows.length!==0){
            query = `UPDATE colors SET color = $3 WHERE id = $1 and "user" = $2`
            values = [id,user,color]
        }
        else {
            query = 'INSERT INTO colors(id,"user",color) VALUES($1,$2,$3)'
            values = [id,user,color]
        }
        pool
            .query(query,values)
            .then(res => {
                console.log(res.rows[0])
            })
            .catch(err => {
                console.error(err.stack)
            })
}