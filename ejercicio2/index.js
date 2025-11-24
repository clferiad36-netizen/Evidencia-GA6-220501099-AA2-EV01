function calcularPorcentaje(valor, porcentaje){
    valor = parseInt(valor);
    var porcentaje = valor * (porcentaje/100);
    return porcentaje;
}
function calcularNotaFinal(notal, nota2, nota3) {
    var notaFinal = calcularPorcentaje(notal, 25)
                + calcularPorcentaje(nota2, 35)
                + calcularPorcentaje(nota3, 40);
    return notaFinal;
}
window. addEventListener ("load", function(e){

    form1. addEventListener ("submit", function (e) {
        e. preventDefault();
        var n1 = txtNota1.value;
        var n2 = txtNota2.value;
        var n3 = txtNota3.value;
        var resultado = calcularNotaFinal(n1, n2, n3);
        document.getElementById("outputResultado").innerHTML = "Su nota final es " + resultado;
    });
});