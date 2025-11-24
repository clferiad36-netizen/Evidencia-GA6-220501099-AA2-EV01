function esCorreoValido(correo) {
  // Expresión para validar formato de correo electronico
  const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return patron.test(correo);
}

function verificarCorreo() {
  const correo = document.getElementById('correo').value.trim();
  const resultado = document.getElementById('resultado');

  if (esCorreoValido(correo)) {
    resultado.textContent = correo + " es un correo valido.";
  } else {
    resultado.textContent = correo + " no es un correo valido.";
  }
}

window.addEventListener("load", function() {
  formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    verificarCorreo();
  });
});