let titulo = document.querySelector('h1');

titulo.innerHTML="Hora del desafio";

function botonConsola(){

        console.log('El boton fue clicado');

}

function eligeCiudad(){
        let ciudad= prompt('Escriba una ciudad de Brasil');

        alert(`Estuve en ${ciudad} y me acorde de ti`);

}

function amoProgramar(){

    alert('Yo amo JS');
}

function suma(){
       let numero1= parseInt(prompt('Digite un número'));
       let numero2= parseInt(prompt('Digite otro número'));

        let resultado = numero1 + numero2;

        alert(`El resultado de la suma es: ${resultado}`)

}