function cambiarColor() {
    var elemento = document.getElementById("miDiv");
    var letras = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    elemento.style.color = color;
    alert("!Nuevo color de texto¡")
}
