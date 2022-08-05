"use strict";
// let saludo = "Hola"
// console.log(saludo)
// let saludo2 = "Hola a todos"
// console.log(saludo2)
let saludo = "Hola";
console.log(saludo);
//Tipos
let numero = 22;
let booleanos = true;
let cualquiqera = true;
cualquiqera = 22;
cualquiqera = "Saludos";
let numeroCadena = 95;
numeroCadena = "Hola";
//Arrays, objetos e interfaces
let palabras = ['foo', 'bar'];
let arregloDeCuaquierCosa = [saludo, 23, true];
let tiposVarios = [saludo, 23, true];
const mario = {
    nombre: "Mario",
    vida: 100,
    habilidades: ['saltar', 'Meterse en tuberias', 'Montar dinosaurio'],
};
mario.ciudad = "Genova";
console.log(mario);
console.table(mario);
//Funciones
function sumar(a, b) {
    return a + b;
}
const sumarArrow = (a, b) => a + b;
const sumarArrow2 = (a, b, c = 5) => a + b + c;
console.log(sumar(1, 2));
console.log(sumarArrow2(1, 4));
const luigi = {
    nombre: 'Luigi',
    vida: 90,
    saltar() {
        console.log("Saltando");
    },
    habilidades: ["Comer honguitos"]
};
function curar(personaje, comerHonguito) {
    personaje.vida += comerHonguito;
}
curar(luigi, 10);
luigi.saltar();
console.log(luigi);
