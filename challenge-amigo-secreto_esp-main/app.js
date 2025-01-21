/**
 * Fucionalidades:
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de 
texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta 
pidiendo un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del 
campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará 
aleatoriamente un nombre de la lista y se mostrará en la página.
 */

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica 
// de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

// Implementacion de funciones

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    amigos.push(nombre);
}

function limpiarTexto(){
    document.getElementById('amigo').value = '';
}

function validarDatos(){
    if(document.getElementById('amigo').value === ''){
        alert("Por favor, inserte un nombre.")
    }else{
        agregarAmigo();
        limpiarTexto();
        mostrarAmigos();
    }
}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = ''; 
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li'); 
        li.textContent = amigos[i]; 
        lista.appendChild(li);
    }
}

// Realizar el sorteo aleatorio
function sortearAmigos() {
    if (amigos.length === 0) {
        alert('No hay ningún nombre en la lista. No se puede sortear.');
    } else {
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        let nombreSorteado = amigos[numeroAleatorio];
        alert(`El amigo sorteado es: ${nombreSorteado}`);
        limpiarLista()
        
    }
}

function limpiarLista(){
    let lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = ''; 
}