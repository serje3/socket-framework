
let _chess_table;
let _cols;
let _tiles;

window.addEventListener('resize',(event)=>{
    const size = Math.min(window.innerWidth-30,window.innerHeight-30)
    const tileSize = Math.trunc(size/14)
    _chess_table.style.height = `${size}px`
    _chess_table.style.width = `${size}px`

    for (let i = 0; i<_tiles.length;i++){
        if (i<14){
            _cols[i].style.height = `${tileSize*14}px`
            _cols[i].style.width = `${tileSize}px`
        }
        _tiles[i].style.height=`${tileSize}px`
    }
})


function refreshChessTable() {
    _chess_table = document.getElementById('chess-table')
    _chess_table.style.transform=null
    _cols = document.getElementsByClassName('col')
    _tiles = getAllTiles()

    const imgs = document.getElementsByTagName('img')
    for(let i=0;i<imgs.length;i++){
        if (imgs[i]!==undefined && imgs[i].alt==='chess_piece'){
            imgs[i].style.transform=null
        }
    }
}