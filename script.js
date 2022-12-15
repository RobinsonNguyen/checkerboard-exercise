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
function generateRandomColor(){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    return `rgb(${x},${y},${z})`
    
}

for(let i = 0; i < 81; i++){
    makeSquare(generateRandomColor());
}

