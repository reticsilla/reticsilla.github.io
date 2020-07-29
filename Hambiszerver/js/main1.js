//Get data from the server - Adatok szerzése a szerverről
function getServerData(url) {
    let fetchOptions = {
        method = "GET",
        mode = "cors",
        cache = "no-cache",
    };

    return fetch(url, fetchOptions).then(
        response => response.json(),
        err => console.error(err)
    );
};
//let data = response.json();
//document.getElementById("proba").innerHTML = "Helló!";
document.querySelector("#getDataBtn").addEventListener("click", function () {
    getServerData(" http://localhost:3000/users").then(
        data => fillDataTable(data, "userTable")
    );
});

//Fill table with server data - Táblázat kitöltése szerver adatokkal
function fillDataTable(data, tableID) {
    let table = document.querySelector(`#${tableID}`);
    if (!table) {
        console.error("A tábla nem létezik.");
        return;
    };

    let tBody = table.querySelector("tbody");
    for (let row of data) {
        let tr = createAnyElement("tr");
        for (let k in row) {
            let td = createAnyElement("td");
            td.innrHTML = row[k];
            tr.appendChild(td);
        };
        tBody.appendChild(tr);
    };
};

function createAnyElement(name, attributes) {
    let element = document.createElement(name);
    for (let k in attributes) {
        element.setAttribute(k, attributes[k]);
    };
    return element;
};

