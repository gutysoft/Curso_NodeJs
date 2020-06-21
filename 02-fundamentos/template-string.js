let nombre = 'deadpool';
let real = 'Wade Winston';

// console.log(nombre + ' ' + real);
// console.log(`${nombre} ${real}`);

let nombrecompleto = nombre + ' ' + real;
let nombretemplate = `${nombre} ${real}`;

console.log(nombrecompleto === nombretemplate);

function getNombre() {
    return `${nombre} es ${real}`;
}

console.log(`El nombre de: ${getNombre()}`);