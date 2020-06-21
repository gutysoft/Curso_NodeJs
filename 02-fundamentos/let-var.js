// let y var declaran variable

let nombre = 'wolverine';

if (true) {
    let nombre = 'Magneto';
}

nombre = 'wolverine1';
nombre = 'wolverine2';
nombre = 'wolverine3';
nombre = 'wolverine4';

console.log(nombre);

// let -> se asigna solo una vez valor a una variable
// var -> se asigna valor a variable según ultima instruccion hecha.

let i = 'habla causa';
//var
for (let i = 0; i <= 5; i++) {
    console.log(`i: ${i}`);
}

console.log(i);