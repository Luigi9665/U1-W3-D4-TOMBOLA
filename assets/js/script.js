//creiamo un array  per i numeri generati
//un secondo array per visualizzare i numeri già estratti
//assocciare ai div nella tabella il numero estratto
const numeroCartelle = parseInt(prompt("Quante cartelle ti servono?"));
const tombola = document.getElementById("tombola");
const divBtn = document.getElementById("divButton");
const divPlayer = document.getElementById("table-player");
const numberGenerate = [];
const numberPlayer = [];

const generateTableNumber = () => {
  for (let i = 0; i < 90; i++) {
    const divNumberTable = document.createElement("div");
    divNumberTable.className = "numberTable";
    const h3Number = document.createElement("h3");
    h3Number.className = "numeroEstratto";
    h3Number.innerText = i + 1;
    divNumberTable.setAttribute("data-num", i + 1);
    divNumberTable.appendChild(h3Number);
    tombola.insertBefore(divNumberTable, divBtn);
  }
};

const generateTablePlayer = (num) => {
  for (let numTabelle = 0; numTabelle < num; numTabelle++) {
    if (numberPlayer.length > 0) numberPlayer.splice(0, numberPlayer.length);
    const containerTable = document.createElement("div");
    containerTable.classList.add("containerTable");
    const table = document.createElement("table");
    containerTable.appendChild(table);
    divPlayer.appendChild(containerTable);
    for (let i = 0; i < 4; i++) {
      const tr = document.createElement("tr");
      for (let y = 0; y < 6; y++) {
        const td = document.createElement("td");
        let number = 0;
        do {
          number = Math.floor(Math.random() * 90) + 1;
        } while (numberPlayer.includes(number));
        numberPlayer.push(number);
        td.setAttribute("data-num", number);
        td.innerText = number;
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
  }
};

divBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const button = e.target;
  if (!button) return;
  if (button.id === "btnGenerator") {
    let number = 0;
    do {
      number = Math.floor(Math.random() * 90) + 1;
    } while (numberGenerate.includes(number));
    numberGenerate.push(number);
    const estrattoDiv = document.querySelector(`div[data-num="${number}"]`);
    if (estrattoDiv) estrattoDiv.classList.add("estratto");
    const estrattoPlayer = document.querySelectorAll(`td[data-num="${number}"]`);
    console.log(estrattoPlayer);
    estrattoPlayer.forEach((estratto) => {
      if (estratto) estratto.classList.add("estratto");
    });
  }
  if (numberGenerate.length === 90) {
    alert("SONO STATI GENERATI TUTTI I NUMERI!");
    location.reload();
  }
});

window.addEventListener("DOMContentLoaded", () => {
  generateTablePlayer(numeroCartelle);
  generateTableNumber();
});
