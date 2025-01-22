// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Con esta función podremos agregar amigos
function agregarAmigo() 
{
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Esto eliminara espacios en blanco

    // Valida campos vacios
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Actualiza la lista o array de amigos
    amigos.push(nombre);

    // Actualiza la lista visible
    actualizarLista();

    // Limpia el campo de entrada
    input.value = '';
    input.focus(); 
}

// Función para actualizar la lista visible en la página
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista actual
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li'); // Crear un nuevo <li>
        li.textContent = amigos[i]; // Asignar el nombre del amigo
        listaAmigos.appendChild(li); // Agregar el <li> a la lista
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Valida que haya amigos disponibles
    if (amigos.length === 0) {
        alert('Por favor, agregue al menos un amigo antes de sortear.');
        return;
    }

    // Genera un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtiene el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Muestra el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>El amigo secreto es: <strong>${amigoSorteado}</strong></p>`;
}
