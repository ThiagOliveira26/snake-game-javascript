let canvas = document.getElementById("snake");
let ctx = canvas.getContext("2d");
let box = 32; // tamanho do quadradinho
let snake = []; //criando a cobrinha como lista
snake[0] = {
    x: 8*box,
    y: 8*box
}
function criarBG(){
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(0, 0, 16*box, 16*box);
}

function criarCobrinha(){
    for (i=0;i<snake.length;i++){
        ctx.fillStyle = "green";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }
}
criarBG();
criarCobrinha();    