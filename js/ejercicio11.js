// Crea un programa que solicite al usuario una lista de palabras separadas por comas. Usa 
// un bucle para verificar cuáles de esas palabras son palíndromas y muéstralas. Una palabra 
// es palíndroma si se lee igual al derecho y al revés. 



let listaDePalabras = prompt("Ingresa una lista de palabras separadas por comas:");


let palabras = listaDePalabras.split(",");


function esPalindroma(palabra) {
    palabra = palabra.trim().toLowerCase();
    return palabra === palabra.split("").reverse().join("");
}

let palindromas = [];
for (let i = 0; i < palabras.length; i++) {
    if (esPalindroma(palabras[i])) {
        palindromas.push(palabras[i].trim());
    }
}


if (palindromas.length > 0) {
    alert("Las palabras palíndromas son: " + palindromas.join(", "));
} else {
    alert("No se encontraron palabras palíndromas.");
}