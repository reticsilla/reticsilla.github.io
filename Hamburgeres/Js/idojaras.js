let homerseklet = [12.2, 14.4, 21.1, 26.8, 17.6, 8.5, -2];
let felsoHatar = [0, 15, 20, 25, 50];
let kinalat = ["Ma forró csokit is árusítunk!", "Melegedj át egy teával nálunk!", "Finom sütit is választhatsz!", "Ma fagyi is kapható!", "Hűsítsd le magad egy jéghideg limonádéval!"]
let nap = "";
minimumHomerseklet();

function napEllenorzes() {
    let enap = document.getElementById("napok").value;
    if (enap === "Hétfő") { nap = homerseklet[0] };
    if (enap === "Kedd") { nap = homerseklet[1] };
    if (enap === "Szerda") { nap = homerseklet[2] };
    if (enap === "Csütörtök") { nap = homerseklet[3] };
    if (enap === "Péntek") { nap = homerseklet[4] };
    if (enap === "Szombat") { nap = homerseklet[5] };
    if (enap === "Vasárnap") { nap = homerseklet[6] };
    if (enap === "") { nap = "" };
    homersekletKiiras();
}
function homersekletKiiras() {
    document.getElementById("homerseklet").innerHTML = nap;
    ajanlatKiiras();
}

function ajanlatKiiras() {
    for (let i = 0; i < felsoHatar.length; i++) {
        if (nap <= felsoHatar[i] && nap != "") {
            document.getElementById("kinalat").innerHTML = kinalat[i];
            break;
        }
        else {
            document.getElementById("kinalat").innerHTML = "";
        }
    }
    minimumHomerseklet();
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