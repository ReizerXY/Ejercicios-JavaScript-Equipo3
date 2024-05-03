function esPar(num) {
    var resultado = parImpar(num);
    alert("El número " + num + " es " + resultado);
}

function parImpar(num) {
    if (num % 2 == 0) return "par";
    else return "impar";
}
