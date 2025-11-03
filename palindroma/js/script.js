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