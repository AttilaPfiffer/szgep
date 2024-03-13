import { szamok } from "./fuggvenyek.js";

const gombokSzamokkal = document.querySelectorAll(".szamok")[0];
gombokSzamokkal.innerHTML += szamok();

const buttonELEMEK = document.querySelectorAll(".szamok");

for(let index = 0; index < buttonELEMEK.length; index++) {
    buttonELEMEK[index].addEventListener("click", kattintas)
}

const kijelzoELEM = document.getElementsByClassName("kijelzo")[0]

function kattintas(event) {
    kijelzoELEM.innerHTML += event.target.innerHTML
}