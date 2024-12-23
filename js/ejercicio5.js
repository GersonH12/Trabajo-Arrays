// Dado un array de números [23, 45, 12, 67, 34, 89, 21], escribe un programa que use un 
// bucle para encontrar el número más grande. Usa condicionales para comparar los valores 


const numeros = [23, 45, 12, 67, 34, 89, 21];

let numeroGrande = numeros[0];

for (i = 0; i < numeros.length; i++) {
    if (numeros[i] > numeroGrande) {
        numeroGrande = numeros[i];
    }
}

console.log(`El numero mas grande es: ${numeroGrande}`);
