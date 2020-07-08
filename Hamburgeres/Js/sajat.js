function calcAmount() {
    const nev = document.querySelector("input[name='name']").value.trim();
    const email = document.querySelector("input[name='email']").value.trim();
    const cim = document.querySelector("input[name='address']").value.trim();
    if (!nev) {alert("A név megadása kötelező")};
    if (!email || !(email.indexOf('@')>0) || !(email.indexOf('.')>0)) {alert("Az e-mail cím hiányzik, vagy érvénytelen! Helyesen adja meg az email címét!")};
    if (!cim) {alert("A szállítási cím megadása kötelező!")};
    let extra = 0;
    let szosz = 0;
    let echeese = document.getElementById("cheese").checked;
    let edouble = document.getElementById("double").checked;
    let emozarella = document.getElementById("mozarella").checked;
    let eparmesan = document.getElementById("parmesan").checked;
    let esauce = document.getElementById("sauce").value;
    //document.getElementById("demo").innerHTML = cim;
    if (echeese > 0 || edouble > 0 || emozarella > 0 || eparmesan > 0) {extra=80};
    if ((esauce === "Mustár") || (esauce === "Majonéz") || (esauce === "Ketchup")) {szosz=50};
    let price = 1200;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value);
    if (isNaN(amountNumber)) {amountNumber=0};
    if (parseInt(amountNumber) > 10) { alert ("Legfeljebb 10 terméket vásárolhat!")}
        else if ( parseInt(amountNumber) < 1) {alert ( "Legalább 1 terméket rendelnie kell!")}
        else {
            let amount = parseInt(amountNumber) * (price + extra + szosz);
            showAmount.innerHTML = amount;
        }
}