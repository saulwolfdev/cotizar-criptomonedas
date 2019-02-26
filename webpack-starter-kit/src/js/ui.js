class Interfaz {
  mostrarMensaje (mensaje, clases) {
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
