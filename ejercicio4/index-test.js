window. addEventListener ("load", function (e){
    loadTests();
});
function loadTests(){
    QUnit.module("Pruebas de la función esPrimo()", function() {

      QUnit.test("Caso 1: 2 es primo", function(assert) {
        assert.ok(esPrimo(2), "2 debe ser primo");
      });

      QUnit.test("Caso 2: 4 no es primo", function(assert) {
        assert.notOk(esPrimo(4), "4 no debe ser primo");
      });

      QUnit.test("Caso 3: 17 es primo", function(assert) {
        assert.ok(esPrimo(17), "17 debe ser primo");
      });

      QUnit.test("Caso 4: 1 no es primo", function(assert) {
        assert.notOk(esPrimo(1), "1 no debe ser primo");
      });

      QUnit.test("Caso 5: -5 no es primo", function(assert) {
        assert.notOk(esPrimo(-5), "-5 no debe ser primo");
      });

    });
}   