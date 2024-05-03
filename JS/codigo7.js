document.getElementById("calcular").addEventListener("click", function() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultado = 1;
    for (var i = 1; i <= numero; i++) {
        resultado *= i;
    }
    alert("El factorial de " + numero + " es: " + resultado);
});
