describe('Test my fromWhere function', function () {

    it('It should return the town the car is from) ', function () {

        assert.deepEqual(fromWhere('CY'), "Bellville");
    });
    it('It should return the town the car is from) ', function () {

        assert.deepEqual(fromWhere('CA'), "Cape Town");
    });

    it('It should return the town the car is from) ', function () {

        assert.deepEqual(fromWhere('CJ'), "Paarl");
    });
    it('It should return the town the car is from) ', function () {

        assert.deepEqual(fromWhere('GP'), "Some other place!");
    });


});