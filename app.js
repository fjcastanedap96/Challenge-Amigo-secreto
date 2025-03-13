// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

// Funcion para agregar amigos
function agregarAmigo () {
    // Capturar el valor del campo de entreda
    nombreAmigo = document.getElementById("amigo").value ;
    
    // validar la entrada
    if (nombreAmigo == "") {
        alert("Por favor, inserte un nombre.");
        exit();
    }

    // Actualizar el array de amigos
    amigos.push(nombreAmigo);
    alert("Se almaceno con exito.");

    // limpiar el campo de entreda
    document.getElementById("amigo").value = '';

    // log
    console.log(amigos)
}
