let fraseDaCapitalizzare = "pippo studia sviluppo web"

// funzione che rende maiuscola solo l'iniziale di una parola
// param: parola da trasformare
// return: la parola trasformata (string)
function toCapitalize(word) {
    // prendere la prima lettera e trasformarla in maiuscola
    const firstLetter = word[0].toUpperCase();
    // sostituire la prima lettera della parola
    const restOfString = word.slice(1).toLowerCase();
    const newWord = firstLetter + restOfString;
    // ritornare la parola risultante
    return newWord;
}
const parole = fraseDaCapitalizzare.split(" ")
// console.log(parole)
let FraseMaiuscola = ""
for (let i = 0; i < parole.length; i++) {
    FraseMaiuscola = FraseMaiuscola + " " + toCapitalize(parole[i])
}
console.log(FraseMaiuscola)