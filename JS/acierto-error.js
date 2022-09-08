//completa el codigo 
function acierto(lasTarjetas) {
    lasTarjetas.forEach(function(elemento) {
      elemento.classList.add("acertada");
    });
    document.querySelector("#correcto").play();
  }
  
  function error(lasTarjetas) {
    lasTarjetas.forEach(function(elemento) {
      elemento.classList.add("error");
    });
  
    document.querySelector("#Error").play();
    //averigua para que sirve el metodo remove
    setTimeout(function() {
      lasTarjetas.forEach(function(elemento) {
        elemento.classList.remove("descubierta");
        elemento.classList.remove("error");
      });
    }, 1000);
  }