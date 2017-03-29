window.onload = function() {
  var registrar = document.getElementById("registrar");
  //var datos = [];

  registrar.addEventListener("click", function(e) {
    e.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var password = document.getElementById("password").value;

    function DatosCoders(nombre,apellido,correo,password){
      this.nombre = nombre;
      this.apellido = apellido;
      this.correo = correo;
      this.password = password;
    };

    if (nombre == "" || apellido == "" || correo == "" || password == ""){
       var obligatorio = document.getElementById("obligatorio");
       obligatorio.innerText = "*Todos los campos son obligatorios";
     } else{
        localStorage.setItem("nuevoRegistro",JSON.stringify(new DatosCoders(nombre,apellido,correo,password)));
        window.location = "bienvenida-coders.html";
        document.getElementById("form-registrar").reset()
    }
  //datos.push(new DatosCoders(nombre,apellido,correo,password));
  //console.log(new DatosCoders(nombre,apellido,correo,password));
  })

//para validar letras en nombre y apellido
  var nombre = document.getElementById("nombre");
  var apellido = document.getElementById("apellido");

  var validLetras = function(e){
    var codTecla = e.keyCode;
    console.log(codTecla);
    if((codTecla>=97 && codTecla<=122) || (codTecla>=65 && codTecla<=90) || codTecla == 39 || codTecla == 32){
      this.nextElementSibling.nextElementSibling.innerText="";
      return true;
    } else {
      this.nextElementSibling.nextElementSibling.innerText="*Este campo solo permite letras";
      return false;
    }
  }

  nombre.onkeypress = validLetras;
  apellido.onkeypress = validLetras;

//inputs obligatorios todos los campos usando regEx para correo y validación password
  var inputs = document.getElementsByClassName("registro");
  var correoRegEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var validacionInput = function(){
    if(this.value.trim().length == 0){
      this.value = "";
      this.nextElementSibling.nextElementSibling.innerText = "*Este campo es obligatorio";
    } else if (this.name == "correo") {
      if (correoRegEx.test(this.value)==false){
    //    console.log(correoRegEx.test(correo));
        document.getElementById("formato-correo").innerText= "*El correo debe tener un formato válido";
      } else {
        document.getElementById("formato-correo").innerText= "";
      }}
     else if (this.name == "password") {
        if (this.value.length < 6 || this.value.length > 20){
          document.getElementById("formato-pass").innerText= "*La contraseña debe de tener entre 6 y 20 caracteres";
        } else {
        document.getElementById("formato-pass").innerText= "";
      }}
    else {
        this.nextElementSibling.nextElementSibling.innerText ="";
    }

//para registrar nombres y apellidos en mayúscula
  var arreglo = this.value.split(" ");
  var arrMayus = "";

  for(var i=0; i<arreglo.length; i++){
    arrMayus += arreglo[i].charAt(0).toUpperCase()+ arreglo[i].substring(1).toLowerCase() + " ";
  }
  this.value= arrMayus.trim();
  }
  for(var i=0; i<inputs.length; i++){
    inputs[i].onblur=validacionInput;
  }
}
