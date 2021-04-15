describe('Test my yearsAgo function' , function() {

    it('that takes in a year and return how many years ago that year is from the current year.. ' , function(){
        
        assert.deepEqual(yearsAgo('2011'), 10);

    });

    it('that takes in a year and return how many years ago that year is from the current year.. ' , function(){
        
        assert.deepEqual(yearsAgo('2015'), 6);

    });

});