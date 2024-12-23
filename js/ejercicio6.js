// Crea un programa que use un bucle para generar un triángulo de asteriscos con la siguiente 
// forma, donde el número de filas lo elija el usuario:



const rows = parseInt(prompt("Ingresa el número de filas para el triángulo invertido:"));


if (!isNaN(rows) && rows > 0) {

    for (let i = rows; i > 0; i--) {
        console.log("*".repeat(i));
    }
} else {
    console.log("Por favor, ingresa un número válido mayor a 0.");
}