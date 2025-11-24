window. addEventListener ("load", function (e){
    loadTests();
});
function loadTests(){
    QUnit.module("Pruebas de la función esCorreoValido", function() {

      QUnit.test("Caso 1: Correo válido (juan.perez@gmail.com)", function(assert) {
        assert.ok(esCorreoValido("juan.perez@gmail.com"), "Debe ser un correo válido");
      });

      QUnit.test("Caso 2: Correo válido con números (maria123@outlook.es)", function(assert) {
        assert.ok(esCorreoValido("maria123@outlook.es"), "Debe ser un correo válido");
      });

      QUnit.test("Caso 3: Correo sin extensión de dominio (usuario@dominio)", function(assert) {
        assert.notOk(esCorreoValido("usuario@dominio"), "No debe ser válido");
      });

      QUnit.test("Caso 4: Falta nombre de usuario (@gmail.com)", function(assert) {
        assert.notOk(esCorreoValido("@gmail.com"), "No debe ser válido");
      });

      QUnit.test("Caso 5: Doble @ (usuario@@dominio.com)", function(assert) {
        assert.notOk(esCorreoValido("usuario@@dominio.com"), "No debe ser válido");
      });

    });
}