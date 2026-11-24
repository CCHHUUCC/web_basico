"use strict";
// if-else
// Validar si un numero es par o impar
let edad = 35;
if (edad % 2 == 0) {
    console.log("Par");
}
else {
    console.log(`${edad} es impar`);
}
console.log("-------------------------------");
//switch
//App que diga la cantidad de dias que tiene un mes
let mes = "enero";
switch (mes) {
    case "enero":
    case "marzo":
    case "mayo":
        console.log(`${mes} tiene 31 dias`);
        break;
    case "abril":
    case "junio":
        console.log(`${mes} tiene 30 dias`);
    case "febrero":
        console.log(`${mes} tiene 28 y cada 4 años 29`);
        break;
    default:
        console.log(`{mes} no existe!!`);
}
