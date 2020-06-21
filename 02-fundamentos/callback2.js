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

let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        callback(`No existe un empleado con este ID ${id}`);
    } else {
        callback(null, empleadoDB);
    }

    // console.log(empleadoDB);
}

//##########################################################
// Tarea por fernando 

let getSalarios = (empleado, callback) => {

    //Se parece a un join para saltar a datos de otra tabla ↓↓↓↓
    let salarioDB = salarios.find(salario => salario.id === empleado.id)

    if (!salarioDB) {
        callback(`No se encontro un salario para el usuario ${empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }

}




//##########################################################
// dentro de este metodo se hace uso de callback

getEmpleado(4, (err, empleado) => {

    if (err) {
        return console.log(err);
    }

    getSalarios(empleado, (err, resp) => {

        if (err) {
            return console.log(err);
        }

        console.log(`El salario de ${resp.nombre} es de ${resp.salario}$`);

    })

});