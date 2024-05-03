function calcularSigno() {
    var fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);
    if (isNaN(fechaNacimiento)) {
        document.getElementById("resultado").textContent = "Por favor, ingresa una fecha válida.";
        return;
    }

    var mes = fechaNacimiento.getMonth() + 1; // Los meses van de 0 a 11
    var dia = fechaNacimiento.getDate();

    var signo = "";

    if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
        signo = "Acuario";
    } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
        signo = "Piscis";
    } else if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
        signo = "Aries";
    } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
        signo = "Tauro";
    } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
        signo = "Géminis";
    } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
        signo = "Cáncer";
    } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
        signo = "Leo";
    } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
        signo = "Virgo";
    } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
        signo = "Libra";
    } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
        signo = "Escorpio";
    } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
        signo = "Sagitario";
    } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
        signo = "Capricornio";
    }

    document.getElementById("resultado").textContent = "Tu signo zodiacal es: " + signo;
}
