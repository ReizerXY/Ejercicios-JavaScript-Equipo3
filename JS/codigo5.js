function limpiar() {
    let lista = document.querySelectorAll('p');
    if (lista.length !== 0) {
        let i = lista.length - 1;
        while (i > -1) {
            lista[i].parentNode.removeChild(lista[i]);
            i--;
        }
    } else {
        alert("No hay párrafos a eliminar");
    }
}

function esPar(numero) {
    let resultado = parImpar(numero);
    let parrafo = document.createElement("p");
    let contenido = document.createTextNode("El número " + numero + " es " + resultado);
    parrafo.appendChild(contenido);
    document.body.appendChild(parrafo);
    document.getElementById("num").value = "";
}

function parImpar(numero) {
    if (numero % 2 == 0) return "par";
    else return "impar";
}
