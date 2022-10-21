// let Km = prompt("Quanti chilometri devi percorrere?");
// Km = parseInt(Km);

// let age = prompt("Quanti anni hai?");
// age = parseInt(age);
const priceKm = 0.21;

let Name = document.querySelector("[name=name]").value;

let Km = document.querySelector("[name=kilometres]").value;
Km = parseFloat(Km);

let age = document.querySelector("[name=yo]").value;
age = parseInt(age);

const eleConfirm = document.querySelector(".confirm");

// Prezzo totale senza sconto (per età dai 19 ai 65)
let totalPriceKm = priceKm * Km;
totalPriceKm = parseFloat(totalPriceKm.toFixed(2));

// Prezzo totale per i minorenni
let totalPriceMin = totalPriceKm - totalPriceKm * 0.2;
totalPriceMin = parseFloat(totalPriceMin.toFixed(2));

// Prezzo totale per gli over 65
let totalPriceOver = totalPriceKm - totalPriceKm * 0.4;
totalPriceOver = parseFloat(totalPriceOver.toFixed(2));

eleConfirm.addEventListener("click", function () {
  if (age === "under") {
    console.log(`Il costo del tuo biglietto è: ${totalPriceMin}€`);
  } else if (age === "over") {
    console.log(`Il costo del tuo biglietto è: ${totalPriceOver}€`);
  } else {
    console.log(`Il costo del tuo biglietto è: ${totalPriceKm}€`);
  }

  console.log(`Il tuo nome è: ${Name}€`);
});
