function agregarNota() {
    var inputNota = document.getElementById("inputNota");
    var nota = inputNota.value.trim();
    if (nota !== "") {
        var listaNotas = document.getElementById("listaNotas");
        var nuevaNota = document.createElement("div");
        nuevaNota.classList.add("nota");
        nuevaNota.textContent = nota;
        nuevaNota.onclick = function() {
            listaNotas.removeChild(nuevaNota);
        };
        listaNotas.appendChild(nuevaNota);
        inputNota.value = ""; // Limpiar el campo de entrada después de agregar la nota
    } else {
        alert("Por favor, escribe algo antes de agregar la nota.");
    }
}
