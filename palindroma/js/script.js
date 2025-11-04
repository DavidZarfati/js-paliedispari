// prendo una parola
// Tolgo gli spazi e le maiuscole per confrontare le lettere
// confronto a coppie le lettere piu esterne (prima e ultima/seconda e penultima/terza e terzultima...)
// se sono tutte uguali le lettere alle posizione opposte, allora la parola è palindroma


let parola = prompt("Inserisci una parola per sapere se è palindroma")
let parolaSistemata = ""
let palindromita = true
function isPalindroma(parola) {
    parolaSistemata = parola.toLowerCase().replace(/\s+/g, '')
    for (let i = 0; i < parolaSistemata.length / 2; i++) {
        if (parolaSistemata[i] !== parolaSistemata[(parolaSistemata.length - 1 - i)]) {
            palindromita = false
        }
    }
}
isPalindroma(parola)
console.log(parolaSistemata, palindromita)

