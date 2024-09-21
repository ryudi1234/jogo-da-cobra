window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d")

    //variaveis

    snake = []
    positionX = 10;
    positionY = 10;
    foodX = 15;
    foodY = 15;
    velX = 0;
    velY = 0;
    grid = 20;
    tam = 4;

    
     
    // chamada da funcao jogo a cada 100 milisegundos
     setInterval(jogo, 100)

     // controles
     document.addEventListener("keydown",function(e){
        switch(e.keyCode){
            //seta direita = 39
            case 39:
                velX = 1;
                velY = 0;
                break;
                //seta esquerda = 37
                case 37:
                    velX = -1;
                    velY = 0;
                    break;
                    
                    //seta pra cima = 38
                    case 38:
                    velY = -1;
                    velX = 0;
                    break;
                    // seta pra baixo = 40
                    case 40:
                        velY = 1;
                        velX = 0;
                        break;

        }
     })




}
function jogo(){
    //config tela
    ctx.fillStyle = "#9cff97"
    //distancia da borda horisontal, distancia da borda vertical, largura, altura
    ctx.fillRect(0,0, canvas.width, canvas.height)

    //deslocamento da cobra
    positionX += velX;
    positionY += velY;

    //espelhamento
    if(positionX < 0){
        positionX = grid;
    }
    if(positionX > grid){
        positionX = 0;
    }
    if(positionY < 0){
        positionY = grid;
    }
    if(positionY > grid){
        positionY = 0
    }

//configuraçao da cobra
    ctx.fillStyle = "#259620";
    for (let a = 0; a < snake.length; a++) {
        ctx.fillRect(snake[a].x * grid, snake[a].y * grid, grid - 1, grid - 1);
        if (a > 0 && snake[a].x === snake[0].x && snake[a].y === snake[0].y) {
            tam = 3; // Reiniciar o tamanho da cobra
        }
    }

    //posicionamento da cobra
    snake.push({ x: positionX, y: positionY });

    
    //apagando
    while(snake.length > tam){
        snake.shift();
    }

    //configurando a comida
    ctx.fillStyle = "#B22222";
    ctx.fillRect(foodX*grid,foodY*grid, grid-1, grid-1);

    //comendo a comida
    if(positionX == foodX && positionY == foodY){
        tam++;
        foodX = Math.floor(Math.random()*grid);
        foodY = Math.floor(Math.random()*grid);

    }


} 