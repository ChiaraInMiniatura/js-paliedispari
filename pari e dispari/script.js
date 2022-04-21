

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Bonus: L’inserimento avviene tramite un campo input

// variabile mex
let responseMex = document.getElementById('messaggio');

// prompt
let pariDispariInserito = prompt("pari o dispari?");
let pariDispari = pariDispariInserito.toLowerCase();
let numUtente = parseInt(prompt("inserisci un numero da 1 a 5"));

console.log("utente ha scelto: ", pariDispari);
console.log("num utente: ", numUtente );

// funzione num random
function numRandom(min, max){
  return Math.floor(Math.random()* (max - min + 1) + min);
}

// numero del pc
numPc = numRandom(1,5);
console.log("numero pc: ", numPc);

// somma
const somma = numUtente + numPc;
console.log("somma: ", somma)

// controllo vincitore

if (somma % 2 === 0 && pariDispari == "pari" || somma % 2 !== 0 && pariDispari == "dispari") {

  console.log("hai vinto!")

  responseMex.innerHTML = `hai scelto: ${pariDispari} e il numero: ${numUtente}. 
  Il computer ha estratto ${numPc} quindi hai vinto!`;

} else {

  console.log("hai perso :(")

  responseMex.innerHTML = `hai scelto: ${pariDispari} e il numero: ${numUtente}. 
  Il computer ha estratto ${numPc} quindi hai perso :(`;
  
}

