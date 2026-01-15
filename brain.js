const player = {
    x: 0,
    y: 0,
    direction: 1 //determinei com numeros cada uma das direcoes, sendo 1
                 //pra cima e o resto aumenta no sentido horario, tipo 2 na direita 
};

let lampX, lampY;

//pra mostrar os movimentos na barra com a sequencia de codigo
const cmd = document.getElementById("cmdline");


document.getElementById('frente').addEventListener('click', () => {
    cmd.innerText += "⬆️";
})

document.getElementById('direita').addEventListener('click', () => {
    cmd.innerText += "➡️";
})

document.getElementById('esquerda').addEventListener('click', () => {
    cmd.innerText += "⬅️";
})

document.getElementById('limpar').addEventListener('click', () => {
    cmd.innerText = "";

})



function andar() {

}