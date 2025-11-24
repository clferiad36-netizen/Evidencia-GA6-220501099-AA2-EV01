 window. addEventListener ("load", function (e){
    loadTests();
});
function loadTests(){
    QUnit.module("Pruebas dia sin IVA", function() {

        QUnit.test("Mujer 18 anos compra 100000", function(assert) {
            document.getElementById("valor").value = 100000;
            document.getElementById("fecha").value = "2007-01-01";
            document.getElementById("genero").value = "F";
            calcular();
            assert.equal(document.getElementById("total").textContent,
            "Total a pagar: $78000", "Debe calcular total con descuentos");
        });

         QUnit.test("Mujer 25 anos compra 100000", function(assert) {
            document.getElementById("valor").value = 100000;
            document.getElementById("fecha").value = "2000-01-01";
            document.getElementById("genero").value = "F";
            calcular();
            assert.equal(document.getElementById("total").textContent,
            "Total a pagar: $76000", "Debe calcular total con descuentos");
        });

        QUnit.test("Hombre 20 anos compra 250000", function(assert) {
            document.getElementById("valor").value = 250000;
            document.getElementById("fecha").value = "2005-01-01";
            document.getElementById("genero").value = "M";
            calcular();
            assert.equal(document.getElementById("total").textContent,
            "Total a pagar: $198750", "Debe calcular total con descuentos");
        });
        
        QUnit.test("Hombre 30 anos compra 150000", function(assert) {
            document.getElementById("valor").value = 150000;
            document.getElementById("fecha").value = "1995-01-01";
            document.getElementById("genero").value = "M";
            calcular();
            assert.equal(document.getElementById("total").textContent,
            "Total a pagar: $117000", "Debe calcular total con descuentos");
        });

         QUnit.test("Hombre 40 anos compra 300000", function(assert) {
            document.getElementById("valor").value = 300000;
            document.getElementById("fecha").value = "1985-01-01";
            document.getElementById("genero").value = "M";
            calcular();
            assert.equal(document.getElementById("total").textContent,
            "Total a pagar: $229500", "Debe calcular total con descuentos");
        });
    });
}