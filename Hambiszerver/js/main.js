let fetchInit = {
    method: "GET",
    headers: new Headers(),
    mode: "cors",
    cache: "default"
};

fetch("http://localhost:3000/users", fetchInit).then(
    response => response.json(),
    err => console.log(err),
).then(
    data => sorokIrasa(data)
);

function sorokIrasa(data) {
    for (let i = 0; i < Object.keys(data).length; i++) {
        let tr = createAnyElement("tr");
        if (i % 2 === 0) {
            tr.classList = "table-secondary";
        }
        for (let j of Object.values(data[i])) {
            let td = createAnyElement("td", { style: "vertical-align:middle" });
            td.innerHTML = j;
            tr.appendChild(td);
        };
        let btnGroup = gombok(i);
        tr.appendChild(btnGroup);
        document.getElementById("partnerek").appendChild(tr);
    };
};

function createAnyElement(name, attributes) {
    let element = document.createElement(name);
    for (let k in attributes) {
        element.setAttribute(k, attributes[k]);
    };
    return element;
};

function gombok(szam) {
    let ertekPs = 2*(szam + 1)
    let ertekPrtl = ertekPs-1;
    let group = createAnyElement("div", { class: "btn btn-group" });
    let infoBtn = createAnyElement("button", { class: "btn btn-success btn-sm", id: ertekPrtl });
    infoBtn.innerHTML = infoBtn.id //`<i class="fas fa-sync"></i>`;
    let delBtn = createAnyElement("button", { class: "btn btn-danger btn-sm", id: ertekPs, onclick: "sorTorlese(this)" });
    delBtn.innerHTML = delBtn.id//`<i class="fas fa-trash"></i>`;

    group.appendChild(infoBtn);
    group.appendChild(delBtn);

    let td = createAnyElement("td");
    td.appendChild(group);
    return td;
};

function sorTorlese(btn) {
    var t = btn.parentNode.parentNode.parentNode.rowIndex;
    document.getElementById("userTable").deleteRow(t);
    let ps = btn.id;
    let tr = (ps / 2);
    let fetchOptions = {
        method: "DELETE",
        mode: "cors",
        cache: "default"
    };
    fetch(`http://localhost:3000/users/${tr}`, fetchOptions).then(
        resp => resp.json(),
        err => console.error(err),
    )
};

