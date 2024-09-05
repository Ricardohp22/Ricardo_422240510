function suma (n1,n2){

    return parseInt(n1)+parseInt(n2);
}

let numero1 = prompt("Ingresa el numero 1: "); //Abre ventana para pedir el numero 1
let numero2 = prompt("Ingresa el numero 2: "); //Abre ventana para pedir el numero 2 

let resultado = suma(numero1, numero2);         //Invoca la funcion y realiza la suma
console.log("El resultado es: " + resultado);   //Pinta el resultado en consola