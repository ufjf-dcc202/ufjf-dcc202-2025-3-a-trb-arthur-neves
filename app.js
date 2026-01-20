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


const botoes = document.querySelectorAll('.seletor');
const bloco = document.querySelectorAll('.bloco');


//tudo isso aqui pra selecionar o bloco de comandos que o jogador vai deixar o codigo dentro 
let selecionado = null;
botoes.forEach((button) => {
    button.addEventListener('click', () =>{

        bloco.forEach(block => {
            block.classList.remove('active');
        });
        const pai = button.closest('.bloco');
        pai.classList.add('active');
        selecionado = pai;
    });
});

//seleciona os botoes de comando, juntando com o anterior,
// os comandos vao sempre pro bloco selecionado 
const cmd = document.querySelectorAll('.btn');

cmd.forEach((button) => {
    button.addEventListener('click', () =>{
        comandos[selecionado.id].push(button.id);
        console.log(comandos[selecionado.id]);
    });
});

const botaoExecutar = document.getElementById('executar');
botaoExecutar.addEventListener('click', () =>{
    executarComandos();
});

function executarComandos() {
    const blocoAtivo = comandos.main;
    blocoAtivo.forEach((comando) => {
        if(comando === 'frente') {
            andar(); 
        } else if(comando === 'direita') {
            virarDireita();
        } else if(comando === 'esquerda') {
            virarEsquerda();
        }
});
}


function andar(){ //funcao pra fazer o robo andar
    const min = 1, max = 5;
    

    let movimento = [
        {nx: 0, ny: -1},  //de acordo com a direcao do robo ele pega um
        {nx: 1, ny: 0},   //valor pra adicionar e consequentemente movimentar
        {nx: 0, ny: 1},
        {nx: -1, ny: 0}
    ];

    let movimentos = movimento[player.direction];
    let novoX = movimentos.nx + player.x;
    let novoY = movimentos.ny + player.y;

    if(novoX > max || novoX < min || novoY > max || novoY < min){
        return; //nao deixa ele sair do tabuleiro
    }

    player.x = novoX; //pra atualizar a posicao do player sempre que ele andar
    player.y = novoY;

    let posicaoAtual = document.getElementById(coord(novoX, novoY));
    posicaoAtual.appendChild(robo);

}

function virarDireita(){ //funcao pra fazer o robo virar pra direita
    player.direction= (player.direction+1) % 4;
};
function virarEsquerda(){ //funcao pra fazer o robo virar pra esquerda
    player.direction= (player.direction-1 + 4) % 4;
}