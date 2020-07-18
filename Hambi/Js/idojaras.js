let homerseklet = [12.2, 14.4, 21.1, 26.8, 17.6, 8.5, -2];
minimumHomerseklet();

let nap = "";
let hofok = 0;
function napValasztas() {
    let enap = document.getElementById("napok").value;
    let x = "";
    let y = "";
    let j = "";
    for (x of Object.keys(idojarasAdatok)) {
        if (x === "napok") {
            for (y of Object.keys(idojarasAdatok[x][enap])) {
                if (y === "sorszam") {
                    for (j of Object.values(idojarasAdatok[x][enap])) {
                        hofok = j;
                    }
                }
            }
        }
    }
    atvaltas();
    kiiras();
}

let fahrenheit = 0;
function atvaltas() {
    fahrenheit = (hofok + 273.15)*9/5-459.67;
    fahrenheit = fahrenheit.toFixed(1);
}

function kiiras() {
    let egyseg = document.getElementById("mertekegyseg").value;
    if (egyseg == 0 && !isNaN(hofok)) {
        document.getElementById("homerseklet").innerHTML = fahrenheit;
    }
    else if (egyseg == 1 && !isNaN(hofok)) {
        document.getElementById("homerseklet").innerHTML = hofok;
    }
    else {
        document.getElementById("homerseklet").innerHTML = "";
    }
    ajanlat();
}

function ajanlat() {
    let x = "";
    let y = "";
    let j = "";
    let i = 0;
    for (x of Object.keys(idojarasAdatok)) {
        if (x === "hatar") {
            for (i = 0; 4; i++) {
                for (y of Object.keys(idojarasAdatok[x][i])) {
                    if (y === "ajanlat") {
                        for (j of Object.values(idojarasAdatok[x][i])) {
                            if (isNaN(hofok)) {
                                document.getElementById("kinalat").innerHTML = Object.values(idojarasAdatok[x][5])[1];
                                break;
                            };
                            if (hofok <= Object.values(idojarasAdatok[x][0])[0]) {
                                document.getElementById("kinalat").innerHTML = Object.values(idojarasAdatok[x][0])[1];
                                break;
                            };
                            if (hofok < Object.values(idojarasAdatok[x][1])[0]) {
                                document.getElementById("kinalat").innerHTML = Object.values(idojarasAdatok[x][1])[1];
                                break;
                            };
                            if (hofok < Object.values(idojarasAdatok[x][2])[0]) {
                                document.getElementById("kinalat").innerHTML = Object.values(idojarasAdatok[x][2])[1];
                                break;
                            };
                            if (hofok < Object.values(idojarasAdatok[x][3])[0]) {
                                document.getElementById("kinalat").innerHTML = Object.values(idojarasAdatok[x][3])[1];
                                break;
                            };
                            if (hofok < Object.values(idojarasAdatok[x][4])[0]) {
                                document.getElementById("kinalat").innerHTML = Object.values(idojarasAdatok[x][4])[1];
                                break;
                            };
                        }
                    }
                }
            }
        }
    }
}

function minimumHomerseklet() {
    let legkisebb = homerseklet.length != 0 ? homerseklet[0] : 0;
    for (let i = 1; i < homerseklet.length; i++) {
        if (legkisebb > homerseklet[i]) {
            legkisebb = homerseklet[i];
        }
    }
    document.getElementById("minimum").innerHTML = legkisebb;
    maximuHomerseklet();
}

function maximuHomerseklet() {
    let legnagyobb = homerseklet.length != 0 ? homerseklet[0] : 0;
    for (let i = 1; i < homerseklet.length; i++)
        if (legnagyobb < homerseklet[i]) {
            legnagyobb = homerseklet[i];
        }
    document.getElementById("maximum").innerHTML = legnagyobb;
    atlagHomerseklet();
}

function atlagHomerseklet() {
    let osszeg = 0;
    let atlag = 0;
    let atlagKiirashoz = 0;
    for (let i = 0; i < homerseklet.length; i++) {
        osszeg += homerseklet[i];
    }
    if (homerseklet.length != 0) {
        atlag = osszeg / homerseklet.length;
        atlagKiirashoz = atlag.toFixed(1);
        document.getElementById("atlag").innerHTML = atlagKiirashoz;
    } else {
        osszeg = 0;
        document.getElementById("atlag").innerHTML = "Nincs adat";
    };
}