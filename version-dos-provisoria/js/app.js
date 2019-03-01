const cotizadorApi = new API("9b886d7b1794f7df58a3d843ee271003119290134976c076413567a2ee7c6e20")
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

        ui.mostrarMensaje("Ambos campos son obligatorios", "alert bg-danger text-center")

    } else {
        cotizadorApi.obtenerValores(monedaSeleccionada, criptoSeleccionada)
            .then(data => {
                ui.mostarResultado(data.resultado.RAW,monedaSeleccionada,criptoSeleccionada)
            })
    }

})