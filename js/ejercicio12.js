// Crea un programa que genere un número aleatorio entre 1 y 10. Luego usa un bucle para 
// permitir al usuario adivinar el número. Si el usuario adivina correctamente, felicítalo y detén 
// el bucle. Si no, indica si el número que ingresó es mayor o menor al número generado. 


let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

let intento;
do {
    intento = parseInt(prompt("Adivina el número entre 1 y 10:"));

    if (isNaN(intento)) {
        alert("Por favor, ingresa un número válido.");
        continue;
    }

    if (intento < numeroAleatorio) {
        alert("El número es mayor. Intenta nuevamente.");
    } else if (intento > numeroAleatorio) {
        alert("El número es menor. Intenta nuevamente.");
    } else {
        alert("¡Felicidades! Adivinaste el número.");
    }
} while (intento !== numeroAleatorio);