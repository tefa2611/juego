//pista aca todo esta bien pero revisa esta funcion e intenta explicar que pasa en cada linea de codigo
function subeNivel() {
    nivelActual++;
  }
  
  function actualizaNivel() {
    var nivelTexto = nivelActual + 1;
    if (nivelTexto < 10) {
      nivelTexto = "0" + nivelTexto;
    }
    document.querySelector("#nivel").innerText = nivelTexto;
  }
  
  function cargaNuevoNivel() {
    subeNivel();
    actualizaNivel();
    iniciar();
  }