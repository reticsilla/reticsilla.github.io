function calcAmount() {
    const nev = document.querySelector("input[name='name']").value.trim();
    const email = document.querySelector("input[name='email']").value.trim();
    const cim = document.querySelector("input[name='address']").value.trim();
    let hnev="";
    let hemail="";
    let hcim="";
    if (!nev) {
        hnev="A név megadása kötelező!";
    }
        else {
            hnev="";
        };
    document.getElementById("hibanev").innerHTML = hnev;
    if (!email || !(email.indexOf('@')>0) || !(email.indexOf('.')>0)) {
        hemail="Az e-mail cím hiányzik, vagy érvénytelen! Helyesen adja meg az email címét!";
    }
        else {
            hemail="";
        }
    document.getElementById("hibaemail").innerHTML = hemail;
    if (!cim) {
        hcim="A szállítási cím megadása kötelező!";
    }
        else {
            hcim="";
        }
    document.getElementById("hibacim").innerHTML = hcim;
    let extra = 0;
    let szosz = 0;
    let echeese = document.getElementById("cheese").checked;
    let edouble = document.getElementById("double").checked;
    let emozarella = document.getElementById("mozarella").checked;
    let eparmesan = document.getElementById("parmesan").checked;
    let esauce = document.getElementById("sauce").value;
    if (echeese > 0 || edouble > 0 || emozarella > 0 || eparmesan > 0) {extra=80};
    if ((esauce === "Mustár") || (esauce === "Majonéz") || (esauce === "Ketchup")) {szosz=50};
    let price = 1200;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value);
    if (isNaN(amountNumber)) {amountNumber=0};
    let hdarab="";
    let amount=0;
    if (parseInt(amountNumber) > 10) {
        hdarab="Legfeljebb 10 terméket vásárolhat!";
    }
        else if ( parseInt(amountNumber) < 1) {
            hdarab="Legalább 1 terméket rendelnie kell!"
        }
        else {
            hdarab="";
            amount = parseInt(amountNumber) * (price + extra + szosz);
        }
    showAmount.innerHTML = amount;
    document.getElementById("darab").innerHTML = hdarab;
}