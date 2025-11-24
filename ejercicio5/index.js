function esMultiplo(num1, num2) {
  // Verificar si es múltiplo
  if (num1 % num2 === 0) {
    return true;
  } else {
    return false;
  }
}

function verificarMultiplo() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultado = document.getElementById('resultado');


  if (num1 <= num2) {
    resultado.textContent = "El primer numero debe ser mayor que el segundo.";
    return;
  }

  if (esMultiplo(num1, num2)) {
    resultado.textContent = num1 + ' es multiplo de ' + num2 + '.';
  } else {
    resultado.textContent = num1 + ' no es multiplo de ' + num2 + '.';
  }
}

window.addEventListener("load", function() {
  formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    verificarMultiplo();
  });
});