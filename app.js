const player = {
    x: 1,
    y: 5,
    direction: 0 //determinei com numeros cada uma das direcoes, sendo 0
                 //pra cima e o resto aumenta no sentido horario 
};
const comandos = {
    main: [],
    p1: [],
    p2: []
}

const lampada = {
    x: 2, 
    y: 3
}

function coord(x, y){
    return `${y}${x}`; //pra 'traduzir' as coordenadas 
}

const start = document.getElementById(coord(player.x,player.y)); //determina o inicio
let robo = document.getElementById('robo');

start.appendChild(robo); //coloca o robo na posicao inicial 


let lamp = document.getElementById('lamp'); //pega a lampada
let lampPos = document.getElementById(coord(lampada.x, lampada.y)); //pega a posicao da lampada
lampPos.appendChild(lamp); //coloca a lampada na posicao determinada


function andar(){
    if(player.direction === 0){
        player.y -= 1;
    } else if(player.direction === 1){
        player.x += 1;
    } else if(player.direction === 2){
        player.y += 1;
    } else if(player.direction === 3){
        player.x -= 1;
    }
}
