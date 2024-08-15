//let parrafo = document.querySelector('p');
//parrafo.innerHTML  = 'Indica un número del 1 al 10';
let numIntentos = 0;
let numeroSecreto = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}


function  verificarIntento(){
    let numeroDeusuario = parseInt(document.getElementById('valorUsuario').value);
   
    if (numeroDeusuario == numeroSecreto){

        asignarTextoElemento('p',`Acertaste el número en ${numIntentos}  ${(numIntentos== 1) ? 'intento' : 'intentos'}` );
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeusuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
            
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        numIntentos++;
        limpiarTexto();
    }
    return;
}

function limpiarTexto(){
    document.querySelector('#valorUsuario').value= '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los números 
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{
        //Si el número generado esta en la lista hacemos una operación si no hacemos otra
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}!`   );
    numeroSecreto = generarNumeroSecreto();
    //inicializar el número de intentos 
    numIntentos = 1;    
}


function reiniciarJuego(){
    //Limpiar textbox
    limpiarTexto();
    //indicar mensajes de intervalos de números
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}


condicionesIniciales();