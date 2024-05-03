
// Añadir una imagen inicial
var imagen = document.createElement("img");
imagen.src = "IMG/rana1.jpg";  // Asegúrate de poner la URL correcta de la imagen inicial
document.getElementById("miDiv").appendChild(imagen);

// Añadir un botón para cambiar la imagen
var botonCambio = document.createElement("button");
botonCambio.textContent = "Cambiar Imagen";
document.getElementById("miDiv").appendChild(botonCambio);

// Función para cambiar la imagen
botonCambio.onclick = function() {
    imagen.src = "IMG/rana2.jpg";  // Asegúrate de poner la URL correcta de la nueva imagen
};
