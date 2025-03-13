// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Funcion para agregar amigos
function agregarAmigo () {
    // Capturar el valor del campo de entreda
    let nombreAmigo = document.getElementById("amigo").value ;
    
    // validar la entrada
    if (nombreAmigo == "") {
        alert("Por favor, inserte un nombre.");
        return 0;
    }

    // Actualizar el array de amigos
    amigos.push(nombreAmigo);
    //alert("Se almaceno con exito.");

    // limpiar el campo de entreda
    document.getElementById("amigo").value = '';

    // log
    console.log(amigos)

    agregarAmigosLista();

}

function agregarAmigosLista () {
    let codigo = "";

    // Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");
    console.log(lista)

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo
    for (i = 0 ; i < amigos.length; i++) {
        codigo = codigo + "<li>" + amigos[i] + "<li/>";
    }
    // Agregar elementos a la lista
    lista.innerHTML = codigo;
    return 0;
    
}


function sortearAmigo () {
    //Validar que haya amigos disponibles
    if (amigos.length <= 0 ) {
        return 0;
    }

    //Generar un índice aleatorio
    let numeroAleatorio = Math.floor(Math.random() * amigos.length);

    //Obtener el nombre sorteado
    let nombreSorteado = amigos[numeroAleatorio];
    
    //Mostrar el resultado
    let resultado  = document.getElementById("resultado");
    resultado.innerHTML = nombreSorteado;

}