//per gli uomini altezza in cm – 100 – (altezza in cm – 150)/4, per le donne altezza in cm – 100 – (altezza in cm – 150)/2.
function pesoLorenz() {
    var altezza = document.getElementById("altezza").value;

    var posSesso = document.getElementById("sesso");
    var sesso = posSesso.options[posSesso.selectedIndex].text;
    var peso = 0;
    if (sesso == "maschio")
        peso = altezza - 100 - ((altezza - 150) / 4);
    else if (sesso == "femmina")
        peso = altezza - 100 - ((altezza - 150) / 2);
    document.getElementById("esito1").innerHTML = "peso: " + peso + "kg";
}
//uomini: altezza - 100 donne: altezza - 104
function pesoBroca() {
    var altezza = document.getElementById("altezza").value;

    var posSesso = document.getElementById("sesso");
    var sesso = posSesso.options[posSesso.selectedIndex].text;
    var peso = 0;
    if (sesso == "maschio")
        peso = altezza - 100;
    else if (sesso == "femmina")
        peso = altezza - 104;
    document.getElementById("esitob").innerHTML = "peso: " + peso + "kg";
}
//La Formula di Wan der Vael si ottiene con l'altezza in centimetri – 150. Il risultato andrà moltiplicato x 0,75 uomini x 0.6 donne e a questo si aggiungerà 50
function pesoWan() {
    var altezza = document.getElementById("altezza").value;

    var posSesso = document.getElementById("sesso");
    var sesso = posSesso.options[posSesso.selectedIndex].text;
    var peso = 0;
    if (sesso == "maschio")
        peso = altezza - 150 * 0.75 + 50;
    else if (sesso == "femmina")
        peso = altezza - 150 * 0.6 + 50;
    document.getElementById("esitow").innerHTML = "peso: " + peso + "kg";
}
//BMI = peso in kg / (statura in metri * statura in metri)
function pesobmi() {
    var altezza = document.getElementById("altezza").value;
    var peso = document.getElementById("peso").value;
    var bmi = peso / ((altezza / 100) * (altezza / 100));
    document.getElementById("esitobmi").innerHTML = "bmi: " + bmi;
}