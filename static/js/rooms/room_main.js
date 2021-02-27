


class ChessPiece{
 constructor() {
     this.setChessTable()
     this.setChessManager()
     this.setAllPieces()
 }

     setAllPieces(){

         this.setPawnsRed()
         this.setPawnsBlue()
         this.setPawnsGreen()
         this.setPawnsYellow()

         this.setRooksRed()
         this.setRooksBlue()
         this.setRooksGreen()
         this.setRooksYellow()

         this.setBishopsRed()
         this.setBishopsBlue()
         this.setBishopsGreen()
         this.setBishopsYellow()

         this.setQueenRed()
         this.setQueenBlue()
         this.setQueenGreen()
         this.setQueenYellow()

         this.setKingRed()
         this.setKingBlue()
         this.setKingGreen()
         this.setKingYellow()

         this.setHorseRed()
         this.setHorseBlue()
         this.setHorseGreen()
         this.setHorseYellow()
     }

     setChessTable(){
         const column = document.getElementsByClassName('col')
         this.chesstable={
            a:column[0].children,
            b:column[1].children,
            c:column[2].children,
            d:column[3].children,
            e:column[4].children,
            f:column[5].children,
            g:column[6].children,
            h:column[7].children,
            i:column[8].children,
            j:column[9].children,
            k:column[10].children,
            l:column[11].children,
            m:column[12].children,
            n:column[13].children,
         }
     }

     setChessManager(){
         this.PawnManager = new Pawns(this.chesstable)
         this.RookManager = new Rooks(this.chesstable)
         this.BishopManager = new Bishops(this.chesstable)
         this.QueenManager = new Queen(this.chesstable)
         this.KingManager = new King(this.chesstable)
         this.HorseManager = new Horse(this.chesstable)
     }

     getImgPawns(color, url=null){
        const src=url || "https://i.ibb.co/kMPF4qZ/w512h5121390849537pawn512.png"
        return `<img src="${src}" alt="chess_piece" class='pawn_${color}' style="height: inherit;width: inherit;" draggable="true" >`
    }

     getImgRooks(color, url=null){
        const src= url || 'https://i.ibb.co/5MXT57v/kek-2.png'
        return `<img src="${src}" alt="chess_piece" class='rook_${color}' style="height: inherit;width: inherit;" draggable="true">`
     }

     getImgBishop(color,url){
        const src = url || 'https://i.ibb.co/wY7vcfP/image.png'
        return `<img src="${src}" alt="chess_piece" class='bishop_${color}' style="height: inherit;width: inherit;" draggable="true">`
     }

     getImgQueen(color,url){
        const src = url || 'https://i.ibb.co/87M7k0f/image.png'
        return `<img src="${src}" alt="chess_piece" class='queen_${color}' style="height: inherit;width: inherit;" draggable="true">`
     }

     getImgKing(color,url){
        const src = url || 'https://i.ibb.co/FJGKptC/image.png'
        return `<img src="${src}" alt="chess_piece" class='king_${color}' style="height: inherit;width: inherit;" draggable="true">`
     }

     getImgHorse(color,url){
        const src = url || 'https://i.ibb.co/84ssTn5/image.png'
        return `<img src="${src}" alt="chess_piece" class='horse_${color}' style="height: inherit;width: inherit;" draggable="true">`
     }



     setPawnsRed(){
        const img = this.getImgPawns('red','https://i.ibb.co/T1fTx1T/pawn.png')
        this.PawnManager.setBottomPawns(img)
     }

     setPawnsBlue(){
        const img = this.getImgPawns('blue','https://i.ibb.co/92wj6tS/pawn.png')
        this.PawnManager.setLeftPawns(img)
     }

     setPawnsGreen(){
        const img = this.getImgPawns('green','https://i.ibb.co/f0DFHg6/pawn.png')
        this.PawnManager.setRightPawns(img)
     }

     setPawnsYellow(){
        const img = this.getImgPawns('yellow','https://i.ibb.co/x7byjYG/pawn.png')
        this.PawnManager.setTopPawns(img)
     }


     setRooksRed(){
        const img = this.getImgRooks('red','https://i.ibb.co/Dz3W0CQ/rook.png')
        this.RookManager.setBottomRooks(img)
     }

     setRooksBlue(){
        const img = this.getImgRooks('blue','https://i.ibb.co/YyVXYSh/image.png')
        this.RookManager.setLeftRooks(img)
     }

     setRooksGreen(){
        const img = this.getImgRooks('green','https://i.ibb.co/n1xVGS9/image.png')
        this.RookManager.setRightRooks(img)
     }

     setRooksYellow(){
        const img = this.getImgRooks('yellow','https://i.ibb.co/0jFMDjj/image.png')
        this.RookManager.setTopRooks(img)
     }


     setBishopsRed(){
        const img = this.getImgBishop('red', 'https://i.ibb.co/0CznfNW/image.png')
        this.BishopManager.setBottomBishops(img)
     }

     setBishopsBlue(){
        const img = this.getImgBishop('blue', 'https://i.ibb.co/WgsmthZ/image.png')
        this.BishopManager.setLeftBishops(img)
     }

     setBishopsGreen(){
        const img = this.getImgBishop('green', 'https://i.ibb.co/sJPqv3B/image.png')
        this.BishopManager.setRightBishops(img)
     }

     setBishopsYellow(){
        const img = this.getImgBishop('yellow', 'https://i.ibb.co/ZYhKb3J/image.png')
        this.BishopManager.setTopBishops(img)
     }


     setQueenRed(){
         const img = this.getImgQueen('red','https://i.ibb.co/rwWBgvd/image.png')
         this.QueenManager.setBottomQueen(img)
     }

     setQueenBlue(){
         const img = this.getImgQueen('blue','https://i.ibb.co/fvjsXMh/image.png')
         this.QueenManager.setLeftQueen(img)
     }

     setQueenGreen(){
         const img = this.getImgQueen('green','https://i.ibb.co/9cjbp1B/image.png')
         this.QueenManager.setRightQueen(img)
     }

     setQueenYellow(){
         const img = this.getImgQueen('yellow','https://i.ibb.co/RCQVLKK/image.png')
         this.QueenManager.setTopQueen(img)
     }


     setKingRed(){
         const img = this.getImgKing('red','https://i.ibb.co/xzdyP8r/image.png')
         this.KingManager.setBottomKing(img)
     }

     setKingBlue(){
         const img = this.getImgKing('blue','https://i.ibb.co/mhZD8wG/image.png')
         this.KingManager.setLeftKing(img)
     }

     setKingGreen(){
         const img = this.getImgKing('green','https://i.ibb.co/RCSdPkv/image.png')
         this.KingManager.setRightKing(img)
     }

     setKingYellow(){
         const img = this.getImgKing('yellow','https://i.ibb.co/zSzF3PQ/image.png')
         this.KingManager.setTopKing(img)
     }


     setHorseRed(){
         const img = this.getImgHorse('red','https://i.ibb.co/sqG13jN/horse.png')
         this.HorseManager.setBottomHorse(img)
     }

     setHorseBlue(){
         const img = this.getImgHorse('blue','https://i.ibb.co/0mz7YL5/image.png')
         this.HorseManager.setLeftHorse(img)
     }

     setHorseGreen(){
         const img = this.getImgHorse('green','https://i.ibb.co/YjC7mqW/horse.png')
         this.HorseManager.setRightHorse(img)
     }

     setHorseYellow(){
         const img = this.getImgHorse('yellow','https://i.ibb.co/hZ1bxG4/horse.png')
         this.HorseManager.setTopHorse(img)
     }
}



const chess_pieces = new ChessPiece()

const piecesList=['king','queen','bishop','rook','pawn', 'horse']


// для перезапуска игры
const refreshPiecesToDefault = ()=>{
        return new Promise((resolve => {
            deleteHints()
            const alltiles = getAllTiles()
            for(let i = 0;i<alltiles.length;i++) {
                if (alltiles[i].childElementCount !== 0) {
                    alltiles[i].children[0].remove()
                }
            }

            chess_pieces.setChessTable()
            chess_pieces.setChessManager()
            chess_pieces.setAllPieces()
            addListenersToTiles()
            saveBoard()
        }))
}




function addListenersToTiles() {
    const alltiles = getAllTiles()
    for(let i = 0;i<alltiles.length;i++) {
        if (alltiles[i].style.opacity !== '0') {
            alltiles[i].addEventListener('dragstart', dragStart)
            alltiles[i].addEventListener('dragenter', dragEnter)
            alltiles[i].addEventListener('dragover', dragOver)
            alltiles[i].addEventListener('dragleave', dragLeave)
            alltiles[i].addEventListener('drop', drop)
        }
    }
}




function showHints(piece){
    const img = '<img src="https://i.ibb.co/8xZyYMv/chess-hint.png" class="tile_hint">'
    deleteHints()
    const tile = getTileFromImg(piece)
    const type = piece.className.split('_')[0]
    const color = piece.className.split('_')[1]
    if (type.startsWith('pawn')){
        showPawnMoves(tile,img,color)
    } else if(type.startsWith('rook')){
        showRookMoves(tile,img,color)
    } else if(type.startsWith('bishop')){
        showBishopMoves(tile,img,color)
    } else if(type.startsWith('queen')){
        showQueenMoves(tile,img,color)
    } else if(type.startsWith('king')){
        showKingMoves(tile,img,color)
    } else if(type.startsWith('horse')){
        showHorseMoves(tile,img,color)
    }

}

function deleteHints() {
    let othersHints = document.getElementsByClassName('tile_hint')
    while (othersHints[0]){
        othersHints[0].remove()
    }
    let otherHintsPieces = document.getElementsByTagName('img')
    for (let i = 0; i<otherHintsPieces.length;i++){
        otherHintsPieces[i].style.backgroundColor=''
    }
}


function isChessPiece(className){
    for (let i = 0; i<piecesList.length;i++){
        if (piecesList[i]===className)
            return true
    }
    return false
}


function getTileFromImg(piece) {
    return piece.parentElement
}

function dragStart(event){

    const fromElement = event.path[0]
    const type = fromElement.className

    if(fromElement.hasAttribute('onclick')){
        showHints(fromElement)
    }
    if (fromElement.alt==='chess_piece') {
        status['fromElement'] = fromElement
    }

}

function dragEnter(event) {
    //ыфвфыв
    }

function dragLeave(event){

    }

function dragOver(event) {
    event.preventDefault()

    }

function drop(event) {
    const toElement = event.toElement.parentElement
    let fromElement = status.fromElement.parentElement
    const fromElementClassName = fromElement.children[0].className

    if (toElement.children[0].className==='tile_hint' || toElement.children[0].style.backgroundColor==='darkred'){

        doStep(toElement.id,fromElement.id)
        deleteHints()
        socket.emit('step',{idFrom: fromElement.id, idTo: toElement.id, className:fromElementClassName, url:status.url})

    }


    status.fromElement=null

}


function doStep(idToElementTile,idFromElementTile){
    let isSelf = false
    const toElementTile = document.getElementById(idToElementTile)
    const fromElement = document.getElementById(idFromElementTile).children[0]
    if (toElementTile.childElementCount !== 0){
        toElementTile.children[0].remove()
        isSelf = true
    }

    toElementTile.insertAdjacentHTML('afterbegin',fromElement.outerHTML)
    fromElement.remove()

    if (isSelf){
        saveBoard()
    }
}

function saveBoard() {
    const boardState = document.getElementById('chess-table').outerHTML
    socket.emit('save_board_state',{
        url:status.url,
        html:boardState
    })
}

