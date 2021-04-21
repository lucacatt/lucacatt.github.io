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
    if (controllo == false || controllo2 == false) {
        alert("inserire nome e cognome maiuscoli");
    }
}