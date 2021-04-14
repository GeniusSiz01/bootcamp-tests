describe('Test my countRegNumber function' , function() {

    it('It should return "number" of registration numbers in the string ' , function(){
        
        assert.deepEqual(countRegNumber('DV 23 NB GP, CA 182736, CY 523519, CJ 812328'), 4);

    });

    it('It should return "number" of registration numbers in the string ' , function(){
        
        assert.deepEqual(countRegNumber('DV 23 NB GP, CJ 812328'), 2);

    });

});