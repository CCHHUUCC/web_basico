/* 
Variables: 
    -Mutables: Cambian de valor
    -Inmutables: No cambian de valor (constantes)
*/

//Variable mutable
let nombre:string="Daniel";
nombre="Arturo";

//Variable inmutable
const PI:number=3.1416;

//Variable con cualquier tipo de dato
let valor:any=true;

//Interpolacion de cadenas ``
let mensaje:string=`Hola ${nombre}, PI ${PI}`;

console.log(mensaje);