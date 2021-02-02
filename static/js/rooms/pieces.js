

function showPawnMoves(tile,img){
    try {
        const tileSibFirst=tile.previousElementSibling;
        const tileSibSecond=tileSibFirst.previousElementSibling;
        ((tileSibFirst.children.length === 0)) ? tileSibFirst.insertAdjacentHTML("afterbegin", img) : null;
        ((tileSibSecond.children.length === 0)) ? tileSibSecond.insertAdjacentHTML("afterbegin", img) : null;
        //Побить
        const tileSibFirstId = tileSibFirst.id
        const tileSibFirstIdLetter=tileSibFirstId[0]
        const tileSibFirstIdNumber=tileSibFirstId.slice(1)
        let charCodeLetter = tileSibFirstIdLetter.charCodeAt(0)
        let nextLetter,previousLetter;
        if (tileSibFirstIdLetter==='a')
            nextLetter=++charCodeLetter;
        else if(tileSibFirstIdLetter==='n')
            previousLetter=--charCodeLetter;
        else {
            nextLetter=charCodeLetter+1;
            previousLetter=charCodeLetter-1;
        }
        let leftTileId,rightTileId;
        switch (nextLetter){
            case null:
                break
            default:
                rightTileId=String.fromCharCode(nextLetter)+tileSibFirstIdNumber
        }
        switch (previousLetter){
            case null:
                break
            default:
                leftTileId=String.fromCharCode(previousLetter)+tileSibFirstIdNumber
        }


        const leftTile = document.getElementById(leftTileId)
        const rightTile = document.getElementById(rightTileId)

        if (leftTile.children[0]){
            let piece = leftTile.children[0].className||'none'
            if (piece.startsWith('pawn')){
                leftTile.children[0].style.backgroundColor='darkred'
            }
        }

        if (rightTile.children[0]){
            let piece = rightTile.children[0].className||'none'
            if (piece.startsWith('pawn')){
                rightTile.children[0].style.backgroundColor='darkred'
            }
        }

    } catch (e){
        console.log(e)
    }
}


function showRookMoves(tile,img){
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
            element.children[0].style.backgroundColor='darkred'
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
            element.children[0].style.backgroundColor='darkred'
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
            console.log(i)
            break
        }
    }


}


