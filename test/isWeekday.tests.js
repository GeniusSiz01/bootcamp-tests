describe('Test my isWeekday function' , function() {

    it('It should return "false" if a day starts wtih "S" i.e "weekdend Saturday&Sunday" ' , function(){
        
        assert.deepEqual(isWeekday('Saturday'), false);

    });

    it('It should return "true" if a day does not starts wtih "S" i.e "weekday Mon-Fri" ' , function(){
        
        assert.deepEqual(isWeekday('Monday'), true);

    });

});
