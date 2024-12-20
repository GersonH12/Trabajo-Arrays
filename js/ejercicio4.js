// Escribe un programa que solicite al usuario una palabra y use un bucle para contar cuántas 
// vocales tiene. Usa condicionales para verificar si cada letra es una vocal.

let palabra = prompt("Ingrese una palabra");

let contadorVocales = 0;

for( i = 0; i < palabra.length; i++){

    let letra = palabra[i].toLowerCase();

    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        contadorVocales++;
    }
}

console.log(`La palabra "${palabra}" tiene ${contadorVocales} vocales`);