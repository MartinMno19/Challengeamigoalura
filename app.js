// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = new Set();

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (!nombre) {
        alert('Por favor, inserta un nombre.');
        return;
    }

    amigos.add(nombre);
    input.value = '';

    renderizarLista();
}

function renderizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(nombre => {
        const li = document.createElement('li');
        li.innerText = nombre;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.size === 0) {
        alert('Agrega al menos un amigo primero.');
        return;
    }

    const amigosArray = Array.from(amigos);
    const indiceAleatorio = Math.floor(Math.random() * amigosArray.length);
    const amigoSecreto = amigosArray[indiceAleatorio];

    //resultado
    const resultado = document.getElementById('resultado');
    resultado.innerText = `Amigo secreto: ${amigoSecreto}`;
}