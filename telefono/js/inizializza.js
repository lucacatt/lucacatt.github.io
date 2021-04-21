function init() {
    var o1 = document.createElement("option");
    o1.value = "nero";
    o1.innerHTML = "Nero";
    document.getElementById("occhi").appendChild(o1);

    o1 = document.createElement("option");
    o1.value = "azzurri";
    o1.innerHTML = "Azzurri";
    document.getElementById("occhi").appendChild(o1);

    o1 = document.createElement("option");
    o1.value = "verdi";
    o1.innerHTML = "Verdi";
    document.getElementById("occhi").appendChild(o1);

    o1 = document.createElement("option");
    o1.value = "f";
    o1.innerHTML = "Femmina";
    document.getElementById("ses").appendChild(o1);

    o1 = document.createElement("option");
    o1.value = "m";
    o1.innerHTML = "Maschio";
    document.getElementById("ses").appendChild(o1);

}