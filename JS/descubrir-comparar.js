function descubrir() {
    var descubiertas;
    var tarjetasPendientes;
    var totalDescubiertas = document.querySelectorAll(
      ".descubierta:not(.acertada)"
    );
  
    if (totalDescubiertas.length > 1) {
      return;
    }
    //Averigua para que sirve el metodo THIS
    this.classList.add("descubierta");
    document.querySelector("#sonidos-carta").cloneNode().play();
  
    descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
    if (descubiertas.length < 2) {
      return;
    }
    //pista aca falta ubicar la palabra descubiertas para invicar la funcion de las cartas
    comparar(descubiertas);
    actualizaContador();
    tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)");
    if (tarjetasPendientes.length === 0) {
      setTimeout(finalizar, 1000);
    }
  }
  
  function comparar(tarjetasAComparar) {
    if (
      tarjetasAComparar[0].dataset.valor === tarjetasAComparar[1].dataset.valor
    ) {
      acierto(tarjetasAComparar);
    } else {
      error(tarjetasAComparar);
    }
  }