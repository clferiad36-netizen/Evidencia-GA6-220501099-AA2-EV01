function esPrimo(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function verificarPrimo() {
  const numero = parseInt(document.getElementById('numero').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(numero)) {
    resultado.textContent = "ingrese un numero valido.";
    return;
  }

  if (esPrimo(numero)) {
    resultado.textContent = numero + " es un numero primo.";
  } else {
    resultado.textContent = numero + " no es un numero primo.";
  }
}

window.addEventListener ("load", function(e){

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();
        verificarPrimo();
    });
});