// PROMESAS
// Caracteristicas de typescript

let empleados = [{
        id: 1,
        nombre: 'Gutylabs'
    },
    {
        id: 2,
        nombre: 'Jessikita'
    }
]

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
]


let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id)

        if (!empleadoDB) {
            reject(`No existe un empleado con este ID ${id}`);
        } else {
            resolve(empleadoDB);
        }

    });

}


// En unsa promesa se requiere dos parametros
// resolve y reject
//##########################################################
// Tarea por fernando 

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salario => salario.id === empleado.id)

        if (!salarioDB) {
            reject(`No se encontro un salario para el usuario ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }

    });
}


// #####################################################
// sin promesas  ↓↓↓↓

// getEmpleado(2).then(empleado => {

//     getSalario(empleado).then(salario => {
//         console.log(`El salario de `, empleado.nombre, ` es `, salario.salario, `$`);
//     }, (err) => console.log(err));

//     // cambiar a funcion flecha antes (err) => {
//     //     console.log(err);
//     // }
// }, (err) => console.log(err));

// #####################################################

// Promesas en cadena

getEmpleado(2).then(empleado => {

        return getSalario(empleado);

    })
    .then(resp => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}$`);
    })
    .catch(err => {
        console.log(err);
    });