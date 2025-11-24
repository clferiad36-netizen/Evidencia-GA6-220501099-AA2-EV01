function calcularEdad(fechaNac) {
  let hoy = new Date();
  let fecha = new Date(fechaNac);
  return hoy.getFullYear() - fecha.getFullYear();
}

function calcular() {
  let valor = parseFloat(document.getElementById("valor").value);
  let fecha = document.getElementById("fecha").value;
  let genero = document.getElementById("genero").value;

  let monto = document.getElementById("monto");
  let dIva = document.getElementById("descuentoIva");
  let dGenero = document.getElementById("descuentoGenero");
  let dEdad = document.getElementById("descuentoEdad");
  let total = document.getElementById("total");

  let edad = calcularEdad(fecha);

  // Descuento por día sin IVA (19%)
  let descIva = valor * 0.19;

  // Descuentos por género y edad
  let descGenero = 0;
  let descEdad = 0;

  if (genero === "F") {
    descGenero = valor * 0.03; // 3 puntos = 3%
    if (edad > 19) {
      descEdad = valor * 0.02; // 2 puntos adicional
    }
  }

  if (genero === "M") {
    if (valor > 200000) {
      descGenero = valor * 0.015; // 1.5 puntos = 1.5%
    }
    if (edad > 23) {
      descEdad = valor * 0.03; // 3 puntos extra
    }
  }

  let totalPagar = valor - descIva - descGenero - descEdad;

  // Mostrar resultados
  monto.textContent = "Monto de compra: $" + valor;
  dIva.textContent = "Descuento por dia sin IVA (19%): $" + descIva;
  dGenero.textContent = "Descuento por genero: $" + descGenero;
  dEdad.textContent = "Descuento por edad: $" + descEdad;
  total.textContent = "Total a pagar: $" + totalPagar;
}

window.addEventListener("load", function() {
  formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    calcular();
  });
});
