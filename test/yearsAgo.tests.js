describe('Test my yearsAgo function' , function() {

    it('It should return how many years ago that year is from the current year. ' , function(){
        
        assert.deepEqual(yearsAgo('2011'), 10);

    });

    it('It should return how many years ago that year is from the current year. ' , function(){
        
        assert.deepEqual(yearsAgo('2015'), 6);

    });

});