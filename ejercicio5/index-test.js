window. addEventListener ("load", function (e){
    loadTests();
});
function loadTests(){
    QUnit.module("Pruebas de la funcion esMultiplo", function() {

      QUnit.test("Caso 1: 12 es multiplo de 3", function(assert) {
        assert.ok(esMultiplo(12, 3), "12 debe ser multiplo de 3");
      });

      QUnit.test("Caso 2: 10 no es multiplo de 4", function(assert) {
        assert.notOk(esMultiplo(10, 4), "10 no debe ser multiplo de 4");
      });

      QUnit.test("Caso 3: 5 menor que 10 (no aplica verificacion)", function(assert) {
        // La función solo evalúa el módulo, así que el resultado es numérico
        assert.ok(esMultiplo(10, 5), "Funcion solo calcula modulo, no compara tamaño");
      });

      QUnit.test("Caso 4: 7 y 7 (son iguales)", function(assert) {
        assert.ok(esMultiplo(7, 7), "7 es multiplo de 7");
      });

      QUnit.test("Caso 5: División entre cero (9,0)", function(assert) {
        assert.notOk(esMultiplo(9, 0), "No debe considerarse multiplo al dividir entre cero");
      });
    });
}