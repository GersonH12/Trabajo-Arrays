// Pide al usuario un número entero positivo y usa un bucle para invertirlo. Por ejemplo, si el 
// usuario ingresa 12345, el programa debe devolver 54321. 

let numero = prompt("Ingresa un numero entero positivo");

if (numero < 0 || isNaN(numero) ||numero % 1 !==0 ) {
    alert("Por favor ingresar un numero entero positivo");
}else {
    let numeroInvertido = "";

    for (let i = numero.length - 1; i >= 0; i--) {
        numeroInvertido += numero[i];
    }

    alert ("El numero invertido es: "+ numeroInvertido);
}