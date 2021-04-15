describe('Test my countRegNumber function' , function() {

    it('that takes in a string parameter that looks like this "CA 42665, AA 12 RT GP, CA 182736,CY 523519, CJ 812328" and returns the number of registration numbers in the string. ' , function(){
        
        assert.deepEqual(countRegNumber('DV 23 NB GP, CA 182736, CY 523519, CJ 812328'), 4);

    });

    it('that takes in a string parameter that looks like this "CA 42665, AA 12 RT GP, CA 182736,CY 523519, CJ 812328" and returns the number of registration numbers in the string. ' , function(){
        
        assert.deepEqual(countRegNumber('DV 23 NB GP, CJ 812328'), 2);

    });

});