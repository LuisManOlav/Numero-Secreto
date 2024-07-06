
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsusario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if (numeroDeUsusario === numeroSecreto) {
        asignarTextoElemento ('p',`Acertaste el Numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } 
    else {
        if (numeroDeUsusario > numeroSecreto) {
            asignarTextoElemento ('p','El Numero Secreto es Menor');    
        } 
        else {
            asignarTextoElemento ('p','El Numero Secreto es Mayor');    
        }  
        intentos++;
        limpiarCaja();
    }    
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    
}
function generarNumeroSecreo() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(numeroSecreto);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles.');
    }
    else {    
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreo();
        } 
        else {
            listaNumerosSorteados.push(numeroGenerado);  
            return numeroGenerado;  
        } 
    }   
    
}
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del Numero Secreto');
    asignarTextoElemento('p', `Indica un Numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreo();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();
