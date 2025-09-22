// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Creado por Cesar Jusepe

// Variables Globales
let listaAmigos = [];



// Funcion para agregar el nombre del amigo del recuadro de texto a las listas
function agregarAmigo(){

    let nombreDeAmigo = document.getElementById('amigo').value;
    if (nombreDeAmigo === ''){
        alert('Por favor, inserte un nombre');
    }else{
    listaAmigos.push(nombreDeAmigo);
    mostrarListaAmigos();
    }
    document.getElementById('amigo').value = '';
    console.log(listaAmigos);
}

function mostrarListaAmigos(){    
    const lista = document.getElementById('listaAmigos')
    lista.innerHTML = "";

    for (i=0; i < listaAmigos.length; i++){
        let li = document.createElement("li");
        li.innerText = listaAmigos[i];
        document.getElementById('listaAmigos').appendChild(li);
    }
}

// Funcion para sortear el nombre de un amigo que se encuentra registrado en la lista
function sortearAmigo(){
    if (listaAmigos.length > 0){
    let sorteo = Math.floor(Math.random() * listaAmigos.length);
    document.getElementById('resultado').innerHTML = listaAmigos[sorteo];
    }else{ 
        alert('La lista de amigos esta vacia, agregue amigos a su lista');
    }
}