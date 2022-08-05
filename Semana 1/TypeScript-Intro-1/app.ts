// let saludo = "Hola"
// console.log(saludo)

// let saludo2 = "Hola a todos"
// console.log(saludo2)

let saludo: string = "Hola"
console.log(saludo)

//Tipos
let numero: number = 22
let booleanos: boolean = true
let cualquiqera: any = true
cualquiqera = 22
cualquiqera = "Saludos"
let numeroCadena: number | string = 95
numeroCadena = "Hola"

//Arrays, objetos e interfaces
let palabras: string[] = ['foo', 'bar']
let arregloDeCuaquierCosa: any[] = [saludo, 23, true]
let tiposVarios: (boolean | string | number)[] = [saludo, 23, true]

//Interfaces
interface PersonajeVideoJuego {
    nombre: string;
    vida: number;
    habilidades: string[];
    ciudad?: string;
}

const mario: PersonajeVideoJuego = {
    nombre: "Mario",
    vida: 100,
    habilidades: ['saltar', 'Meterse en tuberias', 'Montar dinosaurio'],
}

mario.ciudad = "Genova"

console.log(mario)
console.table(mario)

//Funciones
function sumar(a: number, b: number): number {
    return a + b
}

const sumarArrow = (a: number, b: number): number => a + b

const sumarArrow2 = (a: number, b?: number, c: number = 5): number => a + b + c

console.log(sumar(1, 2))
console.log(sumarArrow2(1, 4))

// Interfaces con metodo

interface PersonajeVideoJuegocConMetodo {
    nombre: string;
    vida: number;
    habilidades: string[];
    ciudad?: string;
    saltar: () => void;
}

const luigi: PersonajeVideoJuegocConMetodo = {
    nombre: 'Luigi',
    vida: 90,
    saltar() {
        console.log("Saltando")
    },
    habilidades: ["Comer honguitos"]
}

function curar(personaje: PersonajeVideoJuegocConMetodo, comerHonguito: number) {
    personaje.vida += comerHonguito
}

curar (luigi, 10)
luigi.saltar()
console.log(luigi)
