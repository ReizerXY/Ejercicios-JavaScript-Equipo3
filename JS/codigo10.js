window.onload = function(){
    var info = document.getElementById("informacion");
    var enlaces = document.getElementsByTagName("a");
    info.innerHTML = "Numero de enlaces = "+enlaces.length;
    var mensaje = " El pen&uacute;ltimo enlace apunta a: "+enlaces[enlaces.length-2].href;
    info.innerHTML = info.innerHTML + "<br/>" + mensaje;
    var contador = 0;

    for(var i=0; i<enlaces.length;i++)
    if(enlaces[i].href == "http://prueba" || enlaces[i].href == "http://prueba/")
    contador++;

    info.innerHTML = info.innerHTML + "<br/>  Y son: " + contador;
    var parrafos = document.getElementsByTagName("p");
    enlaces = parrafos[2].getElementsByTagName("a");

    info.innerHTML = info.innerHTML + "<br/>" + "Numero de enlaces en el tercer parrafo: "+enlaces.length;
}