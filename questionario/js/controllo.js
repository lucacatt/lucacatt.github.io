function controlloMaiuscolo(s) {
    var character = '';
    var giusto = true;
    var i = 0;
    while (i <= s.length) {
        character = s.charAt(i);
        if (!isNaN(character * 1)) {
            giusto = false;
        } else {
            if (character == character.toLowerCase()) {
                giusto = false;
            }
        }
        i++;
    }
    return giusto;
}
function elabora() {
    var cognome = document.getElementById("cognome").value;
    var nome = document.getElementById("nome").value; var i = 0;
    var controllo = controlloMaiuscolo(cognome);
    var controllo2 = controlloMaiuscolo(nome);
    var punti = 0;
    if (controllo == false || controllo2 == false) {
        alert("inserire nome e cognome maiuscoli");
    }
    if (document.getElementById("linguaggio").value == "C++") {
        punti++;
    }
    var posBool = document.getElementById("bool");
    var bool = posBool.options[posBool.selectedIndex].text;
    if (bool == "2") {
        punti++;
    }
    if (document.getElementById("risp1").checked) {
        punti++;
    }
    if (document.getElementById("chiave1").checked && document.getElementById("chiave3").checked) {
        punti++;
    }
    if (document.getElementById("bit").value == "byte") {
        punti++;
    }
    document.getElementById("punti").value = punti;
}
function codice() {
    var posMese = document.getElementById("bool");
    var mese = posMese.options[posMese.selectedIndex].text;
    document.getElementById("puntiUtente").value = document.getElementById("cognome").value.charAt(0) + document.getElementById("cognome").value.charAt(1) + document.getElementById("cognome").value.charAt(2) + document.getElementById("nome").value.charAt(0) + document.getElementById("nome").value.charAt(1) + document.getElementById("nome").value.charAt(2) + mese + document.getElementById("anno").value.charAt(0) + document.getElementById("anno").value.charAt(1) + (document.getElementById("punti").value * 10);
}