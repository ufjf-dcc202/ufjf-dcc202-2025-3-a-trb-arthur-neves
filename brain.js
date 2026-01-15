const player = {
    x: 0,
    y: 0,
    direction: 1 //determinei com numeros cada uma das direcoes, sendo 1
                 //pra cima e o resto aumenta no sentido horario, tipo 2 na direita 
};

let lampX, lampY;

const cimabtn = document.getElementById('frente');
cimabtn.addEventListener('click', () => {
        document.getElementById("cmdline").innerText += "⬆️";
    })



function andar() {

}