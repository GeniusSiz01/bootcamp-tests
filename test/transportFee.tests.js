describe('Test my transportFee function' , function() {

    it('It should return the right price based on the shift you are working "Morning=R20" as your work provides transport back home. If you work "nightshift" you pay nothing, because your work provides transport from and to work. ' , function(){
        
        assert.deepEqual(transportFee('morning'), "R20");
    });

    it('It should return the right price based on the shift you are working "Morning=R20" as your work provides transport back home. If you work "nightshift" you pay nothing, because your work provides transport from and to work. ' , function(){
        
        assert.deepEqual(transportFee('afternoon'), "R10");
    });

    it('It should return the right price based on the shift you are working "Morning=R20" as your work provides transport back home. If you work "nightshift" you pay nothing, because your work provides transport from and to work. ' , function(){
        
        assert.deepEqual(transportFee('nightshift'), "free");
    });


});