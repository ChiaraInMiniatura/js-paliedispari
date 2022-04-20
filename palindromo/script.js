// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Bonus: L’inserimento avviene tramite un campo input

let parola = prompt('inserisci una parola');
let parolaInvertita = invertiParola(parola);



// funzione per invertire la parola
function invertiParola(stringa){
  
let parolaInvertita = '';

let i = stringa.length - 1;
  
while (i >= 0) {
parolaInvertita += stringa[i];
i--;}

return parolaInvertita;
}


// controllo parola palindroma
if(parola == parolaInvertita){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
}