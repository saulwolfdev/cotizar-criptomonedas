// async function obtenerClientes() {
//     const Cliente = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`clientes cargados....`)
//         }, 2000);
//     })
//     const error = false
//     if (!error) {
//         const respuesta = await Cliente
//         return respuesta
//     } else {
//         await Promise.reject(`Hubo un error`)
//     }
// }
// obtenerClientes()
//     .then(res => console.log(res))
//     .catch(error => console.log(error))

async function leerTodos() {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const datos= await respuesta.json()
    return datos
}
leerTodos()
    .then(usuarios => console.log(usuarios))