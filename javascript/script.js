let canvas = document.getElementById("snake");
let ctx = canvas.getContext("2d");
let box = 32; // tamanho do quadradinho
let snake = []; //criando a cobrinha como lista

//posicao 8 para ser criado no centro do jogo.
snake[0] = {
    x: 8*box,
    y: 8*box
}
let direction = "right"; //inicio do movimento para direita

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

function iniciarJogo(){
    criarBG();
    criarCobrinha();  
    
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right")    snakeX += box;
    if(direction == "left")     snakeX -= box;
    if(direction == "up")       snakeY += box;
    if(direction == "down")     snakeY -= box;

    snake.pop(); //retira o ultimo elemento do array.

    //a atualizacao da direcao, é a nova cabeça. dando noçao de movimento.
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);