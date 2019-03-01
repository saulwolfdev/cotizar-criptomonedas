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
  mostarResultado(resultado, moneda, cryptomoneda) {

    const resultadoAnterior = document.querySelector("#resultados>div")

    if (resultadoAnterior) {
      resultadoAnterior.remove()
    }
    console.log(resultado)
    console.log(moneda)
    console.log(cryptomoneda)
    const lecturaDatos = resultado[cryptomoneda][moneda]

    let precioJson = lecturaDatos.PRICE.toFixed(2)
    let variacionDia = lecturaDatos.CHANGEDAY.toFixed(4)
    let precioActualFecha = new Date(lecturaDatos.LASTUPDATE * 1000).toLocaleDateString("es-ARG")

    let templateHTML = `
    <div class="flex-container">
      <h4>resultado</h4>
        <ul>
        <li>El precio  de ${lecturaDatos.FROMSYMBOL}</li>
        <li>de la moneda ${lecturaDatos.TOSYMBOL}</li>
        <li>vacioracion por dia: ${precioJson}</li>
        <li>ultimo cambio: ${variacionDia}</li>
        <li>ultimo cambio: ${precioActualFecha}</li>
        </ul>

    </div>
    `
    this.mostrarOcultarSpiner("block")

    setTimeout(() => {
      document.querySelector("#resultados").innerHTML = templateHTML
      this.mostrarOcultarSpiner("none")
    }, 3000)
    //
  }
  mostrarOcultarSpiner(vista) {
    const spiner = document.querySelector(".contenido-spinner")

    spiner.style.display = vista
  }


}