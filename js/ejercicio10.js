// Escribe un programa que recorra un array de edades [18, 25, 14, 32, 16, 40] usando un 
// bucle y clasifique cada edad como "Mayor de edad" o "Menor de edad". Imprime cada edad 
// con su clasificación. 

let edades = [18, 25, 14, 32, 16, 40];

for ( i = 0; i < edades.length; i++) {
    if (edades[i] >= 18) {
        console.log( edades[i] + " Mayor de edad")
    }else {
        console.log(edades[i] + "Menor de edad");
    }
}