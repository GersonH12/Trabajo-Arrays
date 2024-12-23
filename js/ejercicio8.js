// Escribe un programa que use un bucle para pedir al usuario números enteros. Suma esos 
// números y detén el bucle cuando el acumulado sea mayor o igual a 100. Muestra el total 
// acumulado. 

let total = 0;

while (total < 100) {
    let numero = parseInt(prompt("Ingresa un numero entero:"));

    if (isNaN(numero)) {
        alert("Por favor ingresa un numero valido.");
        continue;
    }

    total += numero;

    console.log("Total acumulado: " + total);
}

alert("El total acumulado es: " +total);



