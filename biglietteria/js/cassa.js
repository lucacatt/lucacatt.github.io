function calcola() {
    var km = document.getElementById("km").value;
    var posti = document.getElementById("posti");
    var persone = posti.options[posti.selectedIndex].text;
    var costo = 0;
    if (document.getElementById("1classe").checked)
        costo = km * 0.43 * persone;
    else if (document.getElementById("2classe").checked)
        costo = km * 0.215 * persone;
    document.getElementById("esito").innerHTML = "Costo: " + costo.toFixed(2) + "€";
}