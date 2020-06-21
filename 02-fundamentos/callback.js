// setTimeout(function() {
//     console.log('aprendiendo sobre callbacks');
// }, 3000);

//Aplicando funcion flecha
// setTimeout(() => {
//     console.log('aprendiendo sobre callbacks, con funcion Flecha');
// }, 3000);

let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Jessikita',
        id // aqui no es necesario colocar el mismo valor al id
    }

    if (id === 20) {
        console.log(`El usuario con id ${id}, no existe en la BD.`);
    } else {
        callback(null, usuario);
    }


};

getUsuarioById(1, (err, usuario) => {

    if (err) {
        return console.log(err);
    }

    console.log('Usuario de base de datos ', usuario);

});