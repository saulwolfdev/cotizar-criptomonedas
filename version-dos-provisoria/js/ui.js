class Interfaz {
  constructor() {
    this.init()
  }
  init() {
    this.construirSelect()
  }
  construirSelect() {
    cotizadorApi.obtenerMonedasAPI()
      .then(monedas => {
        console.log(monedas)
        //NO SE PUEDE RECORRER UN OBJETO
        //TOMA COMO ARREGLO EL PRIMER PARAMETRO DEL OBJETO Y LO ORDENA
        //console.log(Object.entries(monedas.monedas.Data))
        //PARA RECORRER UN OBJETO POR SU KEY
        const select = document.querySelector("#cripto")
        for (const [key, value] of Object.entries(monedas.monedas.Data)) {
          // console.log(key)
          //console.log(value.ImageUrl)
          const opcion = document.createElement("option")
          opcion.value = value.Symbol
          opcion.appendChild(document.createTextNode(value.CoinName))
          select.appendChild(opcion)
        }
      })
  }

  mostrarMensaje(mensaje, clases) {
    const div = document.createElement('div')
    div.className = clases
    div.appendChild(document.createTextNode(mensaje))

    const divMensajes = document.querySelector('.mensajes')
    divMensajes.appendChild(div)

    setTimeout(() => {
      document.querySelector(".mensajes div").remove
    }, 3000);
  }
}