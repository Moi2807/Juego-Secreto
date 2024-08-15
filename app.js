

let parrafo = document.querySelector('p');
parrafo.innerHTML  = 'Indica un número del 1 al 10';

let numeroSecreto = generarNumeroSecreto();
 


function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}


function  verificarIntento(){
    let numeroDeusuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    console.log(numeroDeusuario);
    console.log(numeroDeusuario === numeroSecreto);
    console.log(typeof(numeroDeusuario));
    console.log(typeof(numeroSecreto));
    return;
}


function generarNumeroSecreto() {
        return Math.floor(Math.random()*10)+1;

}


asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p','Indica un número del 1 al 10¡');

