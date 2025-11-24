function sumarTresEnteros (numero1, numero2, numero3){
    var resultado = numero1 + numero2 + numero3;
    return resultado;
}
window.addEventListener ("load", function(e){

    form1. addEventListener("submit", function(e) {
        e.preventDefault();
        var n1 = txtNumero1. value;
        var n2 = txtNumero2. value;
        var n3 = txtNumero3.value;
        var resultado = sumarTresEnteros(n1, n2, n3);
        document.getElementById("outputResultado"). innerHTML = "El resultado de la suma es "+resultado;
    });
});