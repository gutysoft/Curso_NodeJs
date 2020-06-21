// FUNCIONES DE FLECHA


// function sumar(a, b) {
//     return a + b;
// }

// let sumar = (a, b) => {
//     return a + b;
// }

//Lo anterior pero en una sola linea
// let sumar = (a, b) => a + b;

// console.log(sumar(10, 20));

//EJERCICIO O1
//PONER EN UNA LINEA
let saludar = () => 'Hola causita';
console.log(saludar());

let saludo2 = nombre => `Hola ${nombre}`;
console.log(saludo2('Marita'));


//Objeto literal, aplicando funcion flecha al ejemplo
let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

console.log(deadpool.getNombre());