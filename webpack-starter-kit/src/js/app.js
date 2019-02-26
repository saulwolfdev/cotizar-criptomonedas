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

// async function leerTodos() {
//     const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/')
//     const datos= await respuesta.json()
//     return datos
// }
// leerTodos()
//     .then(usuarios => console.log(usuarios))


const cotizadorApi = new API("9b886d7b1794f7df58a3d843ee271003119290134976c076413567a2ee7c6e20")

const cotizadorAPI = new API();
const ui = new Interfaz()


const formulario = document.querySelector(".form")
formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    //moneda
    const monedaSelect = document.querySelector("#moneda")
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value
    //cripto
    const criptoSelect = document.querySelector("#cripto")
    const criptoSeleccionada = criptoSelect.options[criptoSelect.selectedIndex].value
    //validar
    if (monedaSeleccionada === "" || criptoSeleccionada === "") {
        console.log("son obligatorios")
        ui.mostrarMensaje("Ambos campos son obligatorios", "alert bg-danger text-center")
        cotizadorAPI.apikey()
    } else {
        console.log("apis cargadas")
    }

})