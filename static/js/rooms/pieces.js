class Pawns{
    constructor(chesstable) {
        this.chesstable=chesstable
    }


    setBottomPawns(img){
        this.chesstable.d.d1.insertAdjacentHTML("afterbegin", img)
        this.chesstable.e.e1.insertAdjacentHTML("afterbegin", img)
        this.chesstable.f.f1.insertAdjacentHTML("afterbegin", img)
        this.chesstable.g.g1.insertAdjacentHTML("afterbegin", img)
        this.chesstable.h.h1.insertAdjacentHTML("afterbegin", img)
        this.chesstable.i.i1.insertAdjacentHTML("afterbegin", img)
        this.chesstable.j.j1.insertAdjacentHTML("afterbegin", img)
        this.chesstable.k.k1.insertAdjacentHTML("afterbegin", img)
    }

    setTopPawns(img){
        this.chesstable.d.d12.insertAdjacentHTML("afterbegin", img)
        this.chesstable.e.e12.insertAdjacentHTML("afterbegin", img)
        this.chesstable.f.f12.insertAdjacentHTML("afterbegin", img)
        this.chesstable.g.g12.insertAdjacentHTML("afterbegin", img)
        this.chesstable.h.h12.insertAdjacentHTML("afterbegin", img)
        this.chesstable.i.i12.insertAdjacentHTML("afterbegin", img)
        this.chesstable.j.j12.insertAdjacentHTML("afterbegin", img)
        this.chesstable.k.k12.insertAdjacentHTML("afterbegin", img)
    }

    setLeftPawns(img){
        this.chesstable.b.b10.insertAdjacentHTML("afterbegin", img)
        this.chesstable.b.b9.insertAdjacentHTML("afterbegin", img)
        this.chesstable.b.b8.insertAdjacentHTML("afterbegin", img)
        this.chesstable.b.b7.insertAdjacentHTML("afterbegin", img)
        this.chesstable.b.b6.insertAdjacentHTML("afterbegin", img)
        this.chesstable.b.b5.insertAdjacentHTML("afterbegin", img)
        this.chesstable.b.b4.insertAdjacentHTML("afterbegin", img)
        this.chesstable.b.b3.insertAdjacentHTML("afterbegin", img)
    }

    setRightPawns(img){
        this.chesstable.m.m10.insertAdjacentHTML("afterbegin", img)
        this.chesstable.m.m9.insertAdjacentHTML("afterbegin", img)
        this.chesstable.m.m8.insertAdjacentHTML("afterbegin", img)
        this.chesstable.m.m7.insertAdjacentHTML("afterbegin", img)
        this.chesstable.m.m6.insertAdjacentHTML("afterbegin", img)
        this.chesstable.m.m5.insertAdjacentHTML("afterbegin", img)
        this.chesstable.m.m4.insertAdjacentHTML("afterbegin", img)
        this.chesstable.m.m3.insertAdjacentHTML("afterbegin", img)
    }
}


class Rooks{
    constructor(chesstable) {
        this.chesstable=chesstable
    }


    setBottomRooks(img){
        this.chesstable.d.d0.insertAdjacentHTML("afterbegin", img)
        this.chesstable.k.k0.insertAdjacentHTML("afterbegin", img)
    }

    setTopRooks(img){
        this.chesstable.d.d13.insertAdjacentHTML("afterbegin", img)
        this.chesstable.k.k13.insertAdjacentHTML("afterbegin", img)
    }

    setLeftRooks(img){
        this.chesstable.a.a10.insertAdjacentHTML("afterbegin", img)
        this.chesstable.a.a3.insertAdjacentHTML("afterbegin", img)
    }

    setRightRooks(img){
        this.chesstable.n.n10.insertAdjacentHTML("afterbegin", img)
        this.chesstable.n.n3.insertAdjacentHTML("afterbegin", img)
    }
}


class Bishops{
    constructor(chesstable) {
    this.chesstable=chesstable
    }

    setBottomBishops(img){
        this.chesstable.f.f0.insertAdjacentHTML('afterbegin',img)
        this.chesstable.i.i0.insertAdjacentHTML('afterbegin',img)
    }

    setTopBishops(img){
        this.chesstable.f.f13.insertAdjacentHTML('afterbegin',img)
        this.chesstable.i.i13.insertAdjacentHTML('afterbegin',img)
    }

    setLeftBishops(img){
        this.chesstable.a.a5.insertAdjacentHTML('afterbegin',img)
        this.chesstable.a.a8.insertAdjacentHTML('afterbegin',img)
    }

    setRightBishops(img){
        this.chesstable.n.n5.insertAdjacentHTML('afterbegin',img)
        this.chesstable.n.n8.insertAdjacentHTML('afterbegin',img)
    }
}


class Queen{
    constructor(chesstable) {
        this.chesstable = chesstable
    }

    setBottomQueen(img){
        this.chesstable.g.g0.insertAdjacentHTML('afterbegin',img)
    }

    setTopQueen(img){
        this.chesstable.h.h13.insertAdjacentHTML('afterbegin',img)
    }

    setLeftQueen(img){
        this.chesstable.a.a6.insertAdjacentHTML('afterbegin',img)
    }

    setRightQueen(img){
        this.chesstable.n.n7.insertAdjacentHTML('afterbegin',img)
    }
}


class King{
    constructor(chesstable) {
        this.chesstable = chesstable
    }

    setBottomKing(img){
        this.chesstable.h.h0.insertAdjacentHTML('afterbegin',img)
    }

    setTopKing(img){
        this.chesstable.g.g13.insertAdjacentHTML('afterbegin',img)
    }

    setLeftKing(img){
        this.chesstable.a.a7.insertAdjacentHTML('afterbegin',img)
    }

    setRightKing(img){
        this.chesstable.n.n6.insertAdjacentHTML('afterbegin',img)
    }
}


class Horse{
    constructor(chesstable) {
        this.chesstable = chesstable
    }

    setBottomHorse(img){
        this.chesstable.e.e0.insertAdjacentHTML('afterbegin',img)
        this.chesstable.j.j0.insertAdjacentHTML('afterbegin',img)
    }

    setTopHorse(img) {
        this.chesstable.e.e13.insertAdjacentHTML('afterbegin',img)
        this.chesstable.j.j13.insertAdjacentHTML('afterbegin',img)
    }

    setLeftHorse(img){
        this.chesstable.a.a9.insertAdjacentHTML('afterbegin',img)
        this.chesstable.a.a4.insertAdjacentHTML('afterbegin',img)
    }

    setRightHorse(img){
        this.chesstable.n.n9.insertAdjacentHTML('afterbegin',img)
        this.chesstable.n.n4.insertAdjacentHTML('afterbegin',img)
    }
}


function setElement(id,img,color){

    const element = document.getElementById(id)

    if (element.children.length===0){
            element.insertAdjacentHTML('afterbegin',img)
            return true
        }
        else{
            const piece = element.children[0]
            if (!piece.className.endsWith(color)) piece.style.backgroundColor='darkred'
            return false
        }
}

function showPawnMoves(tile,img,color){
    try {
        let startPosition;
        let tileSibFirst;
        let tileSibSecond;
        if (color === 'red') {
            startPosition='1'
            tileSibFirst = tile.previousElementSibling;
            tileSibSecond = tileSibFirst.previousElementSibling;
        } else if (color === 'yellow'){
            startPosition='12'
            tileSibFirst = tile.nextElementSibling;
            tileSibSecond = tileSibFirst.nextElementSibling;
        } else if (color === 'blue'){
            startPosition='b'
            const tileId = tile.id
            const tileIdLetter = tileId[0].charCodeAt(0)
            const tileIdNumber = Number(tileId.slice(1))
            tileSibFirst = document.getElementById(`${String.fromCharCode(tileIdLetter+1) + tileIdNumber.toString()}`)
            tileSibSecond = document.getElementById(`${String.fromCharCode(tileIdLetter+2) + tileIdNumber.toString()}`)
        } else {
            startPosition='m'
            const tileId = tile.id
            const tileIdLetter = tileId[0].charCodeAt(0)
            const tileIdNumber = Number(tileId.slice(1))
            tileSibFirst = document.getElementById(`${String.fromCharCode(tileIdLetter-1) + tileIdNumber.toString()}`)
            tileSibSecond = document.getElementById(`${String.fromCharCode(tileIdLetter-2) + tileIdNumber.toString()}`)
        }

        if (tileSibFirst!==null && tileSibFirst.children.length === 0) {
            tileSibFirst.insertAdjacentHTML("afterbegin", img)
            if (tileSibSecond!==null && tileSibSecond.children.length === 0 && (startPosition===tile.id[0]||startPosition===tile.id.slice(1))) tileSibSecond.insertAdjacentHTML("afterbegin", img)
        } else if (tileSibFirst===null) return false

        //Побить
        const tileSibFirstId = tileSibFirst.id
        const tileSibFirstIdLetter=tileSibFirstId[0]
        const tileSibFirstIdNumber=Number(tileSibFirstId.slice(1))
        if (color === 'red' || color === 'yellow') {
            let charCodeLetter = tileSibFirstIdLetter.charCodeAt(0)
            let nextLetter, previousLetter;
            if (tileSibFirstIdLetter === 'a')
                nextLetter = charCodeLetter + 1;
            else if (tileSibFirstIdLetter === 'n')
                previousLetter = charCodeLetter - 1;
            else {
                nextLetter = charCodeLetter + 1;
                previousLetter = charCodeLetter - 1;
            }
            let leftTileId, rightTileId;
            switch (nextLetter) {
                case null:
                    break
                default:
                    rightTileId = String.fromCharCode(nextLetter) + tileSibFirstIdNumber
            }
            switch (previousLetter) {
                case null:
                    break
                default:
                    leftTileId = String.fromCharCode(previousLetter) + tileSibFirstIdNumber
            }

            const leftTile = document.getElementById(leftTileId)
            const rightTile = document.getElementById(rightTileId)



        if (leftTile.children.length !== 0){
            let piece = leftTile.children[0].className||'none'
            if (!piece.endsWith(color) ){
                leftTile.children[0].style.backgroundColor='darkred'
            }
        }

        if (rightTile.children.length !== 0){
            let piece = rightTile.children[0].className||'none'
            if (!piece.endsWith(color)){
                rightTile.children[0].style.backgroundColor='darkred'
            }
        }


        }

        if (color === 'blue' || color === 'green'){
            let nextNumber, previousNumber;

            nextNumber = tileSibFirstIdNumber + 1;
            previousNumber = tileSibFirstIdNumber - 1;

            let leftTileId, rightTileId;

            if (nextNumber<14){
                leftTileId = tileSibFirstIdLetter + nextNumber.toString()
            }
            if (previousNumber>=0){
                rightTileId = tileSibFirstIdLetter + previousNumber.toString()
            }


            const leftTile = document.getElementById(leftTileId)
            const rightTile = document.getElementById(rightTileId)



            if (leftTile!== null && leftTile.children.length !== 0){
                let piece = leftTile.children[0].className||'none'
                if (!piece.endsWith(color) ){
                    leftTile.children[0].style.backgroundColor='darkred'
                }
            }

            if (rightTile !== null && rightTile.children.length !== 0){
                let piece = rightTile.children[0].className||'none'
                if (!piece.endsWith(color)){
                    rightTile.children[0].style.backgroundColor='darkred'
                }
            }

        }

    } catch (e){
        console.log(e)
    }
}

function showRookMoves(tile,img,color){
    let rookId=tile.id
    const rookIdLetter = rookId[0]
    const rookIdNumber = Number(rookId.slice(1))
    let limiterUp=14;
    let limiterDown=-1;
    let limiterLeft='a';
    let limiterRight='n';
    if (rookIdLetter<='c' || rookIdLetter>='l'){
        limiterDown=2
        limiterUp=11
    } else if(rookIdNumber<=2 || rookIdNumber>=11){
        limiterLeft='d'
        limiterRight='k'
    }

    const horizontalTints = (charCode)=>{
        const element = document.getElementById(String.fromCharCode(charCode)+rookIdNumber.toString())
        if (element.children.length===0){
            element.insertAdjacentHTML('afterbegin',img)
            return true
        }
        else{
            const piece = element.children[0]
            if (!piece.className.endsWith(color)) piece.style.backgroundColor='darkred'
            return false
        }
    }

    const verticalTints = (idNumber) => {
        const element = document.getElementById(rookIdLetter+idNumber.toString())
        if (element.children.length===0){
            element.insertAdjacentHTML('afterbegin',img)
            return true
        }
        else{
            const piece = element.children[0]
            if (!piece.className.endsWith(color)) piece.style.backgroundColor='darkred'
            return false
        }
    }



    //Вверх
    for (let i = rookIdNumber+1; i<limiterUp;i++){
        if (!verticalTints(i))
            break

    }

    //Вниз
    for (let i = rookIdNumber-1; i>limiterDown;i--){
        if (!verticalTints(i))

            break
    }


    //Вправо
    for (let i = rookIdLetter.charCodeAt(0)+1; i<=limiterRight.charCodeAt(0);i++){
        if (!horizontalTints(i))
            break
    }

    //Влево
    for (let i = rookIdLetter.charCodeAt(0)-1; i>=limiterLeft.charCodeAt(0);i--){
        if (!horizontalTints(i)) {

            break
        }
    }
}

function showBishopMoves(tile,img,color){
    const bishopId = tile.id
    const bishopIdLetter = bishopId[0]
    const bishopIdNumber = Number(bishopId.slice(1))
    const arrayNotTiles = ['a11','b11','c11','a2','b2','c2','c12','c13','c1','c0','l11','m11','n11','l2','m2','n2','l1','l0','l12','l13']


    const Tints = (idNumber,idLetter) => {
        const element = document.getElementById(idLetter+idNumber.toString())

        if (element.children.length===0){
            element.insertAdjacentHTML('afterbegin',img)
            return true
        }
        else{
            const piece = element.children[0]
            if (!piece.className.endsWith(color)) piece.style.backgroundColor='darkred'
            return false
        }
    }


    // Влево вверх
    for (let i = 1;;i++){
        const idNumber = bishopIdNumber + i
        const idLetterNum = bishopIdLetter.charCodeAt(0) - i
        const idLetter = String.fromCharCode(idLetterNum)

        if (idLetterNum<97 || idNumber>13 || arrayNotTiles.indexOf((idLetter + idNumber.toString()))!==-1) break

        if (!Tints(idNumber,idLetter))
            break
    }


    // Вправо вверх
    for (let i = 1;;i++){
        const idNumber = bishopIdNumber + i
        const idLetterNum = bishopIdLetter.charCodeAt(0) + i
        const idLetter = String.fromCharCode(idLetterNum)

        if (idLetterNum>110 || idNumber>13 || arrayNotTiles.indexOf((idLetter + idNumber.toString()))!==-1) break

        if (!Tints(idNumber,idLetter))
            break
    }

    // Влево вниз
    for (let i = 1;;i++){
        const idNumber = bishopIdNumber - i
        const idLetterNum = bishopIdLetter.charCodeAt(0) - i
        const idLetter = String.fromCharCode(idLetterNum)

        if (idLetterNum<97 || idNumber<0 || arrayNotTiles.indexOf((idLetter + idNumber.toString()))!==-1) break

        if (!Tints(idNumber,idLetter))
            break
    }

    // Вправо вниз
    for (let i = 1;;i++){
        const idNumber = bishopIdNumber - i
        const idLetterNum = bishopIdLetter.charCodeAt(0) + i
        const idLetter = String.fromCharCode(idLetterNum)

        if (idLetterNum>110 || idNumber<0 || arrayNotTiles.indexOf((idLetter + idNumber.toString()))!==-1) break

        if (!Tints(idNumber,idLetter))
            break
    }
}

function showQueenMoves(tile,img,color) {
    const queenId = tile.id
    const queenIdLetter = queenId[0]
    const queenIdNumber = Number(queenId.slice(1))
    const arrayNotTiles = ['a11','b11','c11','a2','b2','c2','c12','c13','c1','c0','l11','m11','n11','l2','m2','n2','l1','l0','l12','l13']
    let limiterUp=14;
    let limiterDown=-1;
    let limiterLeft='a';
    let limiterRight='n';
    if (queenIdLetter<='c' || queenIdLetter>='l'){
        limiterDown=2
        limiterUp=11
    } else if(queenIdNumber<=2 || queenIdNumber>=11){
        limiterLeft='d'
        limiterRight='k'
    }

    const Tints = (idNumber,idLetter) => {
        const element = document.getElementById(idLetter+idNumber.toString())

        if (element.children.length===0){
            element.insertAdjacentHTML('afterbegin',img)
            return true
        }
        else{
            const piece = element.children[0]
            if (!piece.className.endsWith(color)) piece.style.backgroundColor='darkred'
            return false
        }
    }


    const horizontalTints = (charCode)=>{
        const element = document.getElementById(String.fromCharCode(charCode)+queenIdNumber.toString())
        if (element.children.length===0){
            element.insertAdjacentHTML('afterbegin',img)
            return true
        }
        else{
            const piece = element.children[0]
            if (!piece.className.endsWith(color)) piece.style.backgroundColor='darkred'
            return false
        }
    }

    const verticalTints = (idNumber) => {
        const element = document.getElementById(queenIdLetter+idNumber.toString())
        if (element.children.length===0){
            element.insertAdjacentHTML('afterbegin',img)
            return true
        }
        else{
            const piece = element.children[0]
            if (!piece.className.endsWith(color)) piece.style.backgroundColor='darkred'
            return false
        }
    }

    //Вверх
    for (let i = queenIdNumber+1; i<limiterUp;i++){
        if (!verticalTints(i))
            break
    }

    //Вниз
    for (let i = queenIdNumber-1; i>limiterDown;i--){
        if (!verticalTints(i))
            break
    }

    //Вправо
    for (let i = queenIdLetter.charCodeAt(0)+1; i<=limiterRight.charCodeAt(0);i++){
        if (!horizontalTints(i))
            break
    }

    //Влево
    for (let i = queenIdLetter.charCodeAt(0)-1; i>=limiterLeft.charCodeAt(0);i--){
        if (!horizontalTints(i)) {
            break
        }
    }

    // Влево вверх
    for (let i = 1;;i++){
        const idNumber = queenIdNumber + i
        const idLetterNum = queenIdLetter.charCodeAt(0) - i
        const idLetter = String.fromCharCode(idLetterNum)

        if (idLetterNum<97 || idNumber>13 || arrayNotTiles.indexOf((idLetter + idNumber.toString()))!==-1) break

        if (!Tints(idNumber,idLetter))
            break
    }

    // Вправо вверх
    for (let i = 1;;i++){
        const idNumber = queenIdNumber + i
        const idLetterNum = queenIdLetter.charCodeAt(0) + i
        const idLetter = String.fromCharCode(idLetterNum)

        if (idLetterNum>110 || idNumber>13 || arrayNotTiles.indexOf((idLetter + idNumber.toString()))!==-1) break

        if (!Tints(idNumber,idLetter))
            break
    }

    // Влево вниз
    for (let i = 1;;i++){
        const idNumber = queenIdNumber - i
        const idLetterNum = queenIdLetter.charCodeAt(0) - i
        const idLetter = String.fromCharCode(idLetterNum)

        if (idLetterNum<97 || idNumber<0 || arrayNotTiles.indexOf((idLetter + idNumber.toString()))!==-1) break

        if (!Tints(idNumber,idLetter))
            break
    }

    // Вправо вниз
    for (let i = 1;;i++){
        const idNumber = queenIdNumber - i
        const idLetterNum = queenIdLetter.charCodeAt(0) + i
        const idLetter = String.fromCharCode(idLetterNum)

        if (idLetterNum>110 || idNumber<0 || arrayNotTiles.indexOf((idLetter + idNumber.toString()))!==-1) break

        if (!Tints(idNumber,idLetter))
            break
    }
}

function showKingMoves(tile,img,color) {
    const kingId = tile.id
    const kingIdLetter = kingId[0]
    const kingIdNumber = Number(kingId.slice(1))
    const arrayNotTiles = ['a11','b11','c11','a2','b2','c2','c12','c13','c1','c0','l11','m11','n11','l2','m2','n2','l1','l0','l12','l13']

    const updown = (idLetter,idNumber, plus_one) =>{
        const newIdNumber = idNumber + plus_one

        if (newIdNumber<0 || newIdNumber >13 || arrayNotTiles.indexOf(idLetter+newIdNumber.toString()) !== -1) return false

        const element = document.getElementById(idLetter + newIdNumber.toString())

        if (element.children.length === 0){
            element.insertAdjacentHTML('afterbegin',img)
        } else {
            const piece = element.children[0]
            if (!piece.className.endsWith(color)) piece.style.backgroundColor='darkred'
            return false
        }
    }

    const leftright = (idLetter,idNumber, plus_one)=>{
        const newIdLetterNum = idLetter.charCodeAt(0) + plus_one
        const newIdLetter = String.fromCharCode(newIdLetterNum)

        if (newIdLetterNum<97 || newIdLetterNum >110 || arrayNotTiles.indexOf(newIdLetter+idNumber.toString()) !== -1) return false

        const element = document.getElementById(newIdLetter + idNumber.toString())

        if (element.children.length === 0){
            element.insertAdjacentHTML('afterbegin',img)
        } else {
            const piece = element.children[0]
            if (!piece.className.endsWith(color)) piece.style.backgroundColor='darkred'
            return false
        }
    }

    const obliquely = (idLetter, idNumber) => {
        const leftUp = [String.fromCharCode(idLetter.charCodeAt(0)-1),idNumber+1]
        const rightUp = [String.fromCharCode(idLetter.charCodeAt(0)+1),idNumber+1]
        const leftDown = [String.fromCharCode(idLetter.charCodeAt(0)-1),idNumber-1]
        const rightDown = [String.fromCharCode(idLetter.charCodeAt(0)+1),idNumber-1]

        if (leftUp[0].charCodeAt(0)>=97 && leftUp[1]<=13 && arrayNotTiles.indexOf(leftUp[0]+leftUp[1].toString())===-1){
            setElement(leftUp[0]+leftUp[1].toString(),img,color)
        }
        if (rightUp[0].charCodeAt(0)<=110 && rightUp[1]<=13 && arrayNotTiles.indexOf(rightUp[0]+rightUp[1].toString())===-1){
            setElement(rightUp[0]+rightUp[1].toString(),img,color)
        }
        if (rightDown[0].charCodeAt(0)<=110 && rightDown[1]>=0 && arrayNotTiles.indexOf(rightDown[0]+rightDown[1].toString())===-1){

            setElement(rightDown[0]+rightDown[1].toString(),img,color)
        }
        if (leftDown[0].charCodeAt(0)>=97 && leftDown[1]>=0 && arrayNotTiles.indexOf(leftDown[0]+leftDown[1].toString())===-1){
            setElement(leftDown[0]+leftDown[1].toString(),img,color)
        }
    }

    updown(kingIdLetter, kingIdNumber,1)
    updown(kingIdLetter, kingIdNumber,-1)
    leftright(kingIdLetter,kingIdNumber,1)
    leftright(kingIdLetter,kingIdNumber,-1)
    obliquely(kingIdLetter,kingIdNumber)

}

function showHorseMoves(tile,img,color){
    const horseId = tile.id
    const horseIdLetter = horseId[0]
    const horseIdNumber = Number(horseId.slice(1))
    const arrayNotTiles = [
        'a0','a1','a2',
        'b0','b1','b2',
        'c0','c1','c2',
        'a11','b11','c11',
        'a12','b12','c12',
        'a13','b13','c13',
        'l0','l1','l2',
        'm0','m1','m2',
        'n0','n1','n2',
        'l11','m11','n11',
        'l12','m12','n12',
        'l13','m13','n13',
    ]


    const up = ()=>{
        const newNumber = horseIdNumber+2
        const newLetter1 = String.fromCharCode(horseIdLetter.charCodeAt(0)+1)
        const newLetter2 = String.fromCharCode(horseIdLetter.charCodeAt(0)-1)
        if(newNumber>13)return false
        if(newLetter1.charCodeAt(0)<=110 && arrayNotTiles.indexOf(newLetter1 + newNumber.toString())=== -1)
            setElement(newLetter1+newNumber.toString(),img,color)
        if(newLetter2.charCodeAt(0)>=97 && arrayNotTiles.indexOf(newLetter2 + newNumber.toString())=== -1)
            setElement(newLetter2+newNumber.toString(),img,color)
    }

    const down = ()=>{
        const newNumber = horseIdNumber-2
        const newLetter1 = String.fromCharCode(horseIdLetter.charCodeAt(0)+1)
        const newLetter2 = String.fromCharCode(horseIdLetter.charCodeAt(0)-1)
        if(newNumber<0)return false
        if(newLetter1.charCodeAt(0)<=110 && arrayNotTiles.indexOf(newLetter1 + newNumber.toString())=== -1)
            setElement(newLetter1+newNumber.toString(),img,color)
        if(newLetter2.charCodeAt(0)>=97 && arrayNotTiles.indexOf(newLetter2 + newNumber.toString())=== -1)
            setElement(newLetter2+newNumber.toString(),img,color)
    }

    const left = () => {
        const newNumber1 = horseIdNumber + 1
        const newNumber2 = horseIdNumber - 1
        const newLetter = String.fromCharCode(horseIdLetter.charCodeAt(0)-2)
        if(newLetter.charCodeAt(0)<97)return false
        if(newNumber1<=13 && arrayNotTiles.indexOf(newLetter + newNumber1.toString())=== -1)
            setElement(newLetter+newNumber1.toString(),img,color);
        if(newNumber2>=0 && arrayNotTiles.indexOf(newLetter + newNumber2.toString())=== -1)
            setElement(newLetter+newNumber2.toString(),img,color);
    }

    const right = () => {
        const newNumber1 = horseIdNumber + 1
        const newNumber2 = horseIdNumber - 1
        const newLetter = String.fromCharCode(horseIdLetter.charCodeAt(0)+2)
        if(newLetter.charCodeAt(0)>110)return false
        if(newNumber1<=13 && arrayNotTiles.indexOf(newLetter + newNumber1.toString())=== -1)
            setElement(newLetter+newNumber1.toString(),img,color);
        if(newNumber2>=0 && arrayNotTiles.indexOf(newLetter + newNumber2.toString())=== -1)
            setElement(newLetter+newNumber2.toString(),img,color);
    }



    up()
    down()
    left()
    right()

}




