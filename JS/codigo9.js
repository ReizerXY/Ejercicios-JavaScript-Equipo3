function palindromo(cadena) {
    var resultado = "La cadena \"" + cadena + "\" \n";
    var cadenaOriginal = cadena.toLowerCase();
    var letrasEspacios = cadenaOriginal.split("");
    
    var cadenaSinEspacios = "";
    for (var i = 0; i < letrasEspacios.length; i++) {
        if (letrasEspacios[i] !== " ") {
            cadenaSinEspacios += letrasEspacios[i];
        }
    }
    
    var letras = cadenaSinEspacios.split("");
    var letrasRevez = cadenaSinEspacios.split("").reverse();

    var iguales = true;
    for (var i = 0; i < letras.length; i++) {
        if (letras[i] !== letrasRevez[i]) {
            iguales = false;
            break;
        }
    }

    if (iguales) {
        resultado += "es un palíndromo";
    } else {
        resultado += "no es un palíndromo";
    }

    return resultado;
}

alert(palindromo("La ruta nos aporto otro paso natural"));
alert(palindromo("Esta frase no se parece a ningun palindromo"));
