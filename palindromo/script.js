// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Bonus: L’inserimento avviene tramite un campo input

// variabile mex
let responseMex = document.getElementById('messaggio');

// prompt
let parolaInserita = prompt('inserisci una parola');
let parola = parolaInserita.toLowerCase();
let parolaInvertita = invertiParola(parola);


// funzione per invertire la parola
function invertiParola(stringa){
  
let parolaInvertita = '';

let i = stringa.length - 1;

while (i >= 0) {
  parolaInvertita += stringa[i];
  i--;
  console.log (parolaInvertita);
}

return parolaInvertita;
}


// controllo parola palindroma
if(parola == parolaInvertita){

    console.log('la parola è palindroma');
    responseMex.innerHTML= `la parola ${parolaInserita} è palindroma`

  } else {

    console.log('la parola non è palindroma');
    responseMex.innerHTML= `la parola ${parolaInserita} non è palindroma`

}


  // versione con for di stefano
  // for(let i = stringa.length - 1; i >= 0; i--){
  //   parolaInvertita += stringa[i];
  // i--;
  // console.log (parolaInvertita);
  // } 

  // trick x girare le stinghe
  // parolaInvertita = stringa.split("").reverse().join("");