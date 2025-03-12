let nombresSorteados = [];

function almacenarNombres (){
    let nombre = document.getElementById('amigo').value;
    if (nombre == ''){
        alert("Debes ingresar un nombre válido. ");
    }else{
        nombresSorteados.push(nombre);
    }
    limpiarCaja ();
    mostrarListaDeAmigos('listaAmigos', nombresSorteados);
}

function limpiarCaja () {
    let valorCaja = document.querySelector('#amigo'); 
    valorCaja.value = '';
    return;
}

function mostrarListaDeAmigos(elemento, texto) { //lo hice generico para poder reutilizarlo
    let lista = document.getElementById(elemento); 
    lista.innerHTML = texto;
    return;
}

function seleccionarGanador (){
    let indice =  Math.floor(Math.random()*nombresSorteados.length);
    let amigoSecreto = nombresSorteados[indice];
    mostrarListaDeAmigos('resultado', amigoSecreto);
    return;
}