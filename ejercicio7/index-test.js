 window. addEventListener ("load", function (e){
    loadTests();
});
function loadTests(){
    QUnit.module("Pruebas de cálculo de edad", function() {

      QUnit.test("Caso 1: Fecha vacía", function(assert) {
        document.getElementById("fechaNacimiento").value = "";
        calcularEdad();
        assert.equal(document.getElementById("resultado").textContent,
          "Ingrese una fecha.", "Debe pedir una fecha");
      });

      QUnit.test("Caso 2: Fecha futura", function(assert) {
        document.getElementById("fechaNacimiento").value = "2030-01-01";
        calcularEdad();
        assert.equal(document.getElementById("resultado").textContent,
          "La fecha ingresada no puede ser del futuro.", "Debe rechazar fecha futura");
      });

      QUnit.test("Caso 3: Fecha 2000-01-01", function(assert) {
        document.getElementById("fechaNacimiento").value = "2000-01-01";
        calcularEdad();
        assert.equal(document.getElementById("resultado").textContent,
          "Usted tiene 25 años.", "Debe calcular 25 años");
      });

      QUnit.test("Caso 4: Fecha 1990-12-31", function(assert) {
        document.getElementById("fechaNacimiento").value = "1990-12-31";
        calcularEdad();
        assert.equal(document.getElementById("resultado").textContent,
          "Usted tiene 35 años.", "Debe calcular 35 años");
      });

      QUnit.test("Caso 5: Fecha 2025-01-01", function(assert) {
        document.getElementById("fechaNacimiento").value = "2025-01-01";
        calcularEdad();
        assert.equal(document.getElementById("resultado").textContent,
          "Usted tiene 0 años.", "Debe calcular 0 años");
      });

    });
}