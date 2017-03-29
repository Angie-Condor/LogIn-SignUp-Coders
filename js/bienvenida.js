window.onload = function(e){
  e.preventDefault();
  var registrate = document.getElementById("registrate");
  var inicia = document.getElementById("inicia");

  registrate.addEventListener ("click", function(){
    window.location = "registrar.html";
  })

  inicia.addEventListener ("click", function(){
    window.location = "iniciar-sesion.html";
  })
};
