function nevEllenorzes() {
    const nev = document.querySelector("input[name='name']").value.trim();
    let hnev = "";
    if (!nev) {
        hnev = "A név megadása kötelező!";
    }
    else {
        hnev = "";
    };
    document.getElementById("hibanev").innerHTML = hnev;
    emailEllenorzes();
}

function emailEllenorzes() {
    const email = document.querySelector("input[name='email']").value.trim();
    let hemail = "";
    if (!email || !(email.indexOf('@') > 0) || !(email.indexOf('.') > 0)) {
        hemail = "Az e-mail cím hiányzik, vagy érvénytelen! Helyesen adja meg az e-mail címét!";
    }
    else {
        hemail = "";
    }
    document.getElementById("hibaemail").innerHTML = hemail;
    cimEllenorzes();
}

function cimEllenorzes() {
    const cim = document.querySelector("input[name='address']").value.trim();
    let hcim = "";
    if (!cim) {
        hcim = "A szállítási cím megadása kötelező!";
    }
    else {
        hcim = "";
    }
    document.getElementById("hibacim").innerHTML = hcim;
    extraEllenorzes();
}

let extra = 0;
function extraEllenorzes() {
    let echeese = document.getElementById("cheese").checked;
    let edouble = document.getElementById("double").checked;
    let emozarella = document.getElementById("mozarella").checked;
    let eparmesan = document.getElementById("parmesan").checked;
    if (echeese > 0 || edouble > 0 || emozarella > 0 || eparmesan > 0) { extra = 80 }
    else { extra = 0 };
    szoszEllenorzes();
    return (extra);
}

let szosz = 0;
function szoszEllenorzes() {
    let esauce = document.getElementById("sauce").value;
    if ((esauce === "Mustár") || (esauce === "Majonéz") || (esauce === "Ketchup")) { szosz = 50 }
    else { szosz = 0 };
    darabEllenorzes();
    return (szosz);
}

let amountInput = "";
let amountNumber = 0;
function darabEllenorzes() {
    amountInput = document.querySelector("input[name='amount-input']");
    amountNumber = parseInt(amountInput.value);
    if (isNaN(amountNumber)) { amountNumber = 0 };
    let hdarab = "";
    if (parseInt(amountNumber) > 10) {
        hdarab = "Legfeljebb 10 terméket vásárolhat!";
        amountNumber = 0;
    }
    else if (parseInt(amountNumber) < 1) {
        hdarab = "Legalább 1 terméket rendelnie kell!"
    }
    else {
        hdarab = "";
    }
    document.getElementById("darab").innerHTML = hdarab;
    calcAmount();
    return (amountNumber);
}

let amount = 0;
let showAmount = document.querySelector("span.show-amount");
function calcAmount() {
    let price = 1200;
    amount = parseInt(amountNumber) * (price + extra + szosz);
    if (amount < 5000 && amountNumber > 0 && amountNumber < 11) { amount = amount + 500 };
    showAmount.innerHTML = amount;
}

function adatEllenorzes() {
    let email1 = document.querySelector("input[name='email1']").value.trim();
    let hemail1 = "";
    if (!email1 || !(email1.indexOf('@') > 0) || !(email1.indexOf('.') > 0)) {
        hemail1 = "Az e-mail cím hiányzik, vagy érvénytelen! Helyesen adja meg az e-mail címét!";
    }
    else {
        hemail1 = "";
    }
    document.getElementById("hibaemail1").innerHTML = hemail1;
    let jelszo = document.querySelector("input[name='password']").value.trim();
    let hjelszo = "Nincs adat";
    if (!jelszo) {
        hjelszo = "A jelszó megadása kötelező!";
    }
    else {
        hjelszo = "";
    };
    document.getElementById("hibajelszo1").innerHTML = hjelszo;
    
}

