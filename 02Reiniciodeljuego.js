

let parrafo = document.querySelector('p');
parrafo.innerHTML  = 'Indica un número del 1 al 10';
let numIntentos = 0;
let numeroSecreto = 0;
 


function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}


function  verificarIntento(){
    let numeroDeusuario = parseInt(document.getElementById('valorUsuario').value);
   
    console.log(numeroSecreto);
    console.log(numIntentos);
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
  let valorCaja = document.querySelector('#valorUsuario');
  valorCaja.value= ' ';

}

function generarNumeroSecreto() {
        return Math.floor(Math.random()*10)+1;

}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p','Indica un número del 1 al 10¡');
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

/*Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su 
altura en metros y peso en kilogramos, que se recibirán como parámetros.*/
let altura = 1.67;
let peso = 90;
let calculo = 0;

function imc(peso,altura){

    calculo = peso/altura;
    return;  
} 


imc(peso,altura);
console.log(`El imc calculado es: ${calculo}`);

//Crea una función que calcule el valor del factorial de un número pasado como parámetro.

let num = 7;  // El número del cual se quiere calcular el factorial
let factorial = 1;  // Inicializamos factorial en 1

function calculoFactorial(num){
 
    while (num > 1) {
        factorial = factorial * num;  // Actualizamos el valor de factorial
        num = num - 1;  // Decrementamos num
        
       
    }
    return factorial;
}

console.log(`El calculo factorial es:${factorial}`);


/*Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el 
valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país).
 Para esto, considera la cotización del dólar igual a R$4,80.*/

/*Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular,
 utilizando la altura y la anchura que se proporcionarán como parámetros.*/

/*Crea una función que muestre en pantalla el área y el perímetro de una sala circular,
 utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.*/

//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.