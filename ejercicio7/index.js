function calcularEdad() {
  let fecha = document.getElementById("fechaNacimiento").value;
  let resultado = document.getElementById("resultado");

  if (fecha === "") {
    resultado.textContent = "Ingrese una fecha.";
    return;
  }

  let hoy = new Date();
  let nacimiento = new Date(fecha);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();

  if (edad < 0) {
    resultado.textContent = "La fecha ingresada no puede ser del futuro.";
  } else {
    resultado.textContent = "Usted tiene " + edad + " años.";
  }
}

window.addEventListener("load", function() {
  formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    calcularEdad();
  });
});