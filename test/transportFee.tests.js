describe('Test my transportFee function' , function() {

    it('It should return the right price based on the shift you are working "Morning=R20" ' , function(){
        
        assert.deepEqual(transportFee('morning'), "R20");
    });

    it('It should return the right price based on the shift you are working "Afternoon=R10" ' , function(){
        
        assert.deepEqual(transportFee('afternoon'), "R10");
    });

    it('It should return the right price based on the shift you are working "Nightshift=free" ' , function(){
        
        assert.deepEqual(transportFee('nightshift'), "free");
    });


});