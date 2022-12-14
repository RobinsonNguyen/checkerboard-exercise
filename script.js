// Your JS goes here
const container = document.getElementsByTagName('body');
function makeSquare(color){
    let div = document.createElement('div');
    div.className = 'square';
    div.style.width = '11.1%';
    div.style.paddingBottom = '11.1%';
    div.style.background = color;
    div.style.float = 'left';
    container[0].appendChild(div);
}
for(let i = 0; i < 81; i++){
    if(i % 2 === 0)
        makeSquare('black');
    else
        makeSquare('red');
}
