let canvas = document.getElementById("snake");
let ctx = canvas.getContext("2d");
let box = 16; // tamanho do quadradinho
let snake = []; //criando a cobrinha como lista

//posicao 8 para ser criado no centro do jogo.
snake[0] = {
    x: 16*box,
    y: 16*box
}
let direction = "right"; //inicio do movimento para direita

let food = {
    x : Math.floor(Math.random() * 31 + 1) * box,
    y : Math.floor(Math.random() * 31 + 1) * box
}

function criarBG(){
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(0, 0, 32*box, 32*box);
}

function criarCobrinha(){
        ctx.fillStyle = "blue";
        ctx.fillRect(snake[0].x, snake[0].y, box, box);
    for (i=1;i<snake.length;i++){
        ctx.fillStyle = "green";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood (){
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);
}

//a cada keydown.. que é o evento especificado, vai para funcao update.
document.addEventListener('keydown',update);

//funcao analisa a tecla clicada e verifica se pode ou nao modificar a direcao
function update (event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){
    
    if(snake[0].x > 31 * box ) snake[0].x =0;
    if(snake[0].x < 0) snake[0].x =32*box;
    if(snake[0].y > 31 * box) snake[0].y =0;
    if(snake[0].y < 0 ) snake[0].y =32*box;

    for (i=1; i< snake.length; i++){
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert("game over");
        }
    }

    criarBG();
    criarCobrinha();  
    drawFood();
    
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right")    snakeX += box;
    if(direction == "left")     snakeX -= box;
    if(direction == "up")       snakeY -= box;
    if(direction == "down")     snakeY += box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop(); //retira o ultimo elemento do array.
    }
    else{
        food.x = Math.floor(Math.random() * 31 + 1) * box;
        food.y = Math.floor(Math.random() * 31 + 1) * box;
    }

    //a atualizacao da direcao, é a nova cabeça. dando noçao de movimento.
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);