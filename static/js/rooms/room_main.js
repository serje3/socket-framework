class ChessPiece{
 constructor() {
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




     // this.setDisabledTiles()
     this.setPawnsRed()
     this.setRooksRed()
 }


    setDisabledTiles() {
        this.chesstable.a[0]=null
        this.chesstable.a[1]=null
        this.chesstable.a[2]=null
        this.chesstable.a[11]=null
        this.chesstable.a[12]=null
        this.chesstable.a[13]=null
        this.chesstable.b[0]=null
        this.chesstable.b[1]=null
        this.chesstable.b[2]=null
        this.chesstable.b[11]=null
        this.chesstable.b[12]=null
        this.chesstable.b[13]=null
        this.chesstable.c[0]=null
        this.chesstable.c[1]=null
        this.chesstable.c[2]=null
        this.chesstable.c[11]=null
        this.chesstable.c[12]=null
        this.chesstable.c[13]=null

        this.chesstable.l[0]=null
        this.chesstable.l[1]=null
        this.chesstable.l[2]=null
        this.chesstable.l[11]=null
        this.chesstable.l[12]=null
        this.chesstable.l[13]=null
        this.chesstable.m[0]=null
        this.chesstable.m[1]=null
        this.chesstable.m[2]=null
        this.chesstable.m[11]=null
        this.chesstable.m[12]=null
        this.chesstable.m[13]=null
        this.chesstable.n[0]=null
        this.chesstable.n[1]=null
        this.chesstable.n[2]=null
        this.chesstable.n[11]=null
        this.chesstable.n[12]=null
        this.chesstable.n[13]=null
    }


     setPawns(color){
         const src="https://i.ibb.co/kMPF4qZ/w512h5121390849537pawn512.png"
         const img = `<img src="${src}" alt="chess_piece" class='pawn_${color}' style="height: inherit;width: inherit;" draggable="true" onclick="showHints(this,'pawn')">`
         this.chesstable.d.d1.insertAdjacentHTML("afterbegin", img)
         this.chesstable.e.e1.insertAdjacentHTML("afterbegin", img)
         this.chesstable.f.f1.insertAdjacentHTML("afterbegin", img)
         this.chesstable.g.g1.insertAdjacentHTML("afterbegin", img)
         this.chesstable.h.h1.insertAdjacentHTML("afterbegin", img)
         this.chesstable.i.i1.insertAdjacentHTML("afterbegin", img)
         this.chesstable.j.j1.insertAdjacentHTML("afterbegin", img)
         this.chesstable.k.k1.insertAdjacentHTML("afterbegin", img)
     }

     setRooks(color){
        const src='https://i.ibb.co/5MXT57v/kek-2.png'
        const img = `<img src="${src}" alt="chess_piece" class='rook_${color}' style="height: inherit;width: inherit;" draggable="true" onclick="showHints(this,'rook')">`
        this.chesstable.d.d0.insertAdjacentHTML("afterbegin", img)
        this.chesstable.k.k0.insertAdjacentHTML("afterbegin", img)
     }

     setPawnsRed(){
        this.setPawns('red')
     }

     setPawnsBlue(){
        this.setPawns('blue')
     }

     setRooksRed(){
        this.setRooks('red')
     }

     setRooksBlue(){
        this.setRooks('blue')
     }


}



new ChessPiece()


const piecesList=['king','queen','bishop','knight','rook','pawn']

tiles_all.forEach(value => {
        if (value.style.opacity !== '0') {
            value.addEventListener('dragstart', dragStart)
            value.addEventListener('dragenter', dragEnter)
            value.addEventListener('dragover', dragOver)
            value.addEventListener('dragleave', dragLeave)
            value.addEventListener('drop', drop)
        }
    })


function showHints(piece,type){
    const img = '<img src="https://i.ibb.co/8xZyYMv/chess-hint.png" class="tile_hint" >'
    deleteHints()
    const tile = getTileFromImg(piece)

    if (type.startsWith('pawn')){
        showPawnMoves(tile,img)
    } else if(type.startsWith('rook')){
        showRookMoves(tile,img)
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

let status={

}

function dragStart(event){
    console.log('dragStart - ',event)
    const fromElement = event.path[0]
    const type = fromElement.className
    showHints(fromElement,type)
    if (fromElement.alt==='chess_piece')
        status['fromElement']=fromElement


}

function dragEnter(event) {

// console.log('dragEnter -',event)
    }

function dragLeave(event){
// console.log('dragLeave -',event)
    }

function dragOver(event) {
    event.preventDefault()
    // console.log('dragOver -',event)
    }

function drop(event) {
    const toElement = event.toElement
    let fromElement = status.fromElement
    if (toElement.className==='tile_hint' || toElement.style.backgroundColor==='darkred'){
        toElement.remove()
        event.path[1].insertAdjacentHTML('afterbegin',fromElement.outerHTML)
        fromElement.remove()
        deleteHints()
    }

    status.fromElement=null
    console.log('drop -',event)
}