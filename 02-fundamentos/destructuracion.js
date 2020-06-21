//Objeto literal
let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

console.log(deadpool.getNombre());

// Aqui un sin alias
// let { nombre, apellido, poder } = deadpool;
// console.log(nombre, apellido, poder);

// se puede hacer un cambio de nombre de variable como un alias
let { nombre: primernombre, apellido, poder } = deadpool;
console.log(primernombre, apellido, poder);