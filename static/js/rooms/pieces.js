

function showPawnMoves(tile,img){
    const tileSibFirst=tile.previousElementSibling;
    const tileSibSecond=tileSibFirst.previousElementSibling;
    try {
        ((tileSibFirst.children.length === 0)) ? tileSibFirst.insertAdjacentHTML("afterbegin", img) : null;
        ((tileSibSecond.children.length === 0)) ? tileSibSecond.insertAdjacentHTML("afterbegin", img) : null;
    } catch (e){

    }
}