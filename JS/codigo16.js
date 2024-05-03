function muestra() {
    var sValor = document.getElementById('opTabla').value;
    var oElemento = document.getElementById('contenido');
    var oTbl = document.getElementById('tabla');
    
    if (isNaN(sValor)) {
        alert("Debe elegir la tabla de multiplicar");
    } else {
        var nTabla = parseInt(sValor, 10);
        oElemento.style.visibility = "visible";

        while (oTbl.rows.length > 1) {
            oTbl.deleteRow(-1);
        }

        for (var i = 1; i <= 10; i++) {
            var oLinea = oTbl.insertRow(-1);
            var oCeldaOpe = oLinea.insertCell(0);
            var oCeldaRes = oLinea.insertCell(1);
            var oCeldaCal = oLinea.insertCell(2);

            oCeldaOpe.innerHTML = `${nTabla} x ${i}`;
            var oCtrl = document.createElement("input");
            oCtrl.type = "text";
            oCtrl.id = "txtResultado" + i;
            oCeldaRes.appendChild(oCtrl);

            var oCtrl2 = document.createElement("span");
            oCtrl2.id = "ok" + i;
            oCeldaCal.appendChild(oCtrl2);
        }
    }
}

function califica() {
    var nTabla = parseInt(document.getElementById('opTabla').value, 10);
    var oTbl = document.getElementById('tabla');
    var nCalif = 0;

    if (oTbl.rows.length > 1) {
        for (var i = 1; i <= 10; i++) {
            var sValorCapturado = document.getElementById("txtResultado" + i).value;
            if (isNaN(sValorCapturado)) {
                alert(`Error de captura en el resultado ${i}`);
                return;
            } else {
                var nCapturado = parseInt(sValorCapturado, 10);
                if (nCapturado === (nTabla * i)) {
                    nCalif++;
                    document.getElementById("txtResultado" + i).style = "border: 4px solid #4bf510; background-color: #abf510;";
                }
            }
        }
        alert("Calificación = " + nCalif);
    }
}
