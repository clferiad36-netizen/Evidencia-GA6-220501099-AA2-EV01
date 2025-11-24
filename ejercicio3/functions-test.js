window. addEventListener ("load", function (e){
    loadTests();
});

function loadTests(){
    QUnit.module('sumarTresEnteros', function() {
        QUnit.test('sumar 3 numeros positivos', function(assert) {
            assert. equal (sumarTresEnteros (1, 2, 3), 6);
        }) ;
        QUnit.test( 'sumar 3 numeros negativos', function(assert) {
        assert.equal(sumarTresEnteros(-1, -3, 0), -4);
        }) ;

        QUnit.test( 'sumar 3 numeros positivos', function(assert) {
        assert.equal(sumarTresEnteros('2', '1', '3'), 6);
        }) ;

        QUnit.test('sumar 3 numeros negativos', function(assert) {
        assert.equal(sumarTresEnteros('-1', '-3', '-5'), -9);
        });
    });
}