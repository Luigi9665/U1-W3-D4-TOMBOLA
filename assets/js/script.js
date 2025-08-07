//creiamo un array  per i numeri generati
//un secondo array per visualizzare i numeri già estratti
//assocciare ai div nella tabella il numero estratto

const tombola = document.getElementById("tombola");
const divBtn = document.getElementById("divButton");
const numberGenerate = [];

const generateTableNumber = () => {
  for (let i = 0; i < 90; i++) {
    const divNumberTable = document.createElement("div");
    divNumberTable.className = "numbertable";
    const h3Number = document.createElement("h3");
    h3Number.innerText = i + 1;
    divNumberTable.appendChild(h3Number);
    tombola.insertBefore(divNumberTable, divBtn);
  }
};

window.addEventListener("DOMContentLoaded", () => {
  generateTableNumber();
});

divBtn.addEventListener("click", (e) => {
  e.defaultPrevented();
  const button = e.target;
  if (!button) return;
  if (button.id === "btnGenerator") {
    let nonEstratto = true;
    let number = 0;
    do {
      number = Math.floor(Math.random() * 90) + 1;
    } while (numberGenerate.includes(number));
    numberGenerate.push(number);
  }
  if (numberGenerate.length === 90) {
    alert("SONO STATI GENERATI TUTTI I NUMERI!");
    return;
  }
});
