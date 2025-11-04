
// chiedo all'utente se pari o dispari
// controllo che l'utente abbia scelto pari o dispari e non una cosa a caso
// chiedo all'utente un numero da 1 a 5
// imposto le due funzioni che generano un numero da 1 a 5 e la seconda che fa la somma
// uso le funzioni per generare un numero e fare la somma del numero generato e del numero utente
// controllo la somma se è pari o dispari e confronto con la scelta iniziale dell'utente
// se concordano gli dico che ha vinto altrimenti ha Perso il giochino


let numeroGenerato = 0
let somma = 0
let paritaNumeri = false
let scelta = prompt("Scegli: Pari o Dispari").toUpperCase();
let numeroUtente = parseInt(prompt("Scegli: un numero da 1 a 5"))
// controllo pari o dispari
if (scelta === "PARI") {
    console.log("Pari");
} else if (scelta === "DISPARI") {
    console.log("Dispari");
} else {
    alert("Scelta non valida");
}
// funzione che genera numero random
function numeroRandomMax5() {
    numeroGenerato = parseInt(Math.random() * 5 + 1)
    console.log(numeroGenerato)
}
numeroRandomMax5()
// funzione che fa la somma
function sommatore(addendo1, addendo2) {
    somma = addendo1 + addendo2;
    console.log(somma)
}
sommatore(numeroGenerato, numeroUtente)

// Controllo se la somma è pari o dispari e confronto con la scelta dell'utente
if (somma % 2 == 0) {
    paritaNumeri = "PARI"
    console.log("La somma è pari")
    if (scelta == paritaNumeri) {
        console.log("Hai vinto! La somma è pari come avevi previsto")
    } else {
        console.log("Hai perso! La somma è pari ma avevi scelto dispari")
    }
} else {
    paritaNumeri = "DISPARI"
    console.log("La somma è dispari")
    if (scelta == paritaNumeri) {
        console.log("Hai vinto! La somma è dispari come avevi previsto")
    } else {
        console.log("Hai perso! La somma è dispari ma avevi scelto pari")
    }
}





