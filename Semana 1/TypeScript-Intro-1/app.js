"use strict";
// let saludo = "Hola"
// console.log(saludo)
exports.__esModule = true;
exports.procesaDatos = void 0;
// let saludo2 = "Hola a todos"
// console.log(saludo2)
var saludo = "Hola";
console.log(saludo);
//Tipos
var numero = 22;
var booleanos = true;
var cualquiqera = true;
cualquiqera = 22;
cualquiqera = "Saludos";
var numeroCadena = 95;
numeroCadena = "Hola";
//Arrays, objetos e interfaces
var palabras = ['foo', 'bar'];
var arregloDeCuaquierCosa = [saludo, 23, true];
var tiposVarios = [saludo, 23, true];
var mario = {
    nombre: "Mario",
    vida: 100,
    habilidades: ['saltar', 'Meterse en tuberias', 'Montar dinosaurio']
};
mario.ciudad = "Genova";
console.log(mario);
console.table(mario);
//Funciones
function sumar(a, b) {
    return a + b;
}
var sumarArrow = function (a, b) { return a + b; };
var sumarArrow2 = function (a, b, c) {
    if (c === void 0) { c = 5; }
    return a + b + c;
};
console.log(sumar(1, 2));
console.log(sumarArrow2(1, 4));
var luigi = {
    nombre: 'Luigi',
    vida: 90,
    saltar: function () {
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
var laMejorCancionDeTodosLosTiempos = {
    nombre: 'Starway to heaven',
    duracion: 8.02,
    annio: "1971",
    autor: {
        nombre: 'Robert Plant',
        edad: 22
    }
};
var unAliasParaElNombre = laMejorCancionDeTodosLosTiempos.nombre, duracion = laMejorCancionDeTodosLosTiempos.duracion, annio = laMejorCancionDeTodosLosTiempos.annio, escritor = laMejorCancionDeTodosLosTiempos.autor.nombre;
console.log('El nombre de la canción es:', unAliasParaElNombre);
console.log('La duración de la canción es:', duracion);
console.log('La publicación de la canción fue:', annio);
console.log('El autor de la canción es:', escritor);
//Destructuracion de arreglos
var canciones = ['Stairway to heaven', 'Kashmir', 'Whole Lotta Love', 'Inmigrant song'];
//const [stairway, allOfMyLove, Kashmir, pepito, ana ] = canciones
var Kashmir = canciones[2], pepito = canciones[3];
console.log(pepito);
var nabucodonosor = {
    apellido: "Perez",
    nombre: "Nabucodonosor",
    edad: 50
};
var ana = {
    apellido: "Perez",
    nombre: "Ana",
    edad: 40
};
function procesaDatos(personas) {
    var nombres = '';
    var sumaEdad = 0;
    personas.forEach(function (persona) { nombres += "".concat(persona.nombre); sumaEdad += persona.edad; });
    return [nombres, sumaEdad];
}
exports.procesaDatos = procesaDatos;
