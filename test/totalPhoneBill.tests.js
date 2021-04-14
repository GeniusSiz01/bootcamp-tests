describe('Test my totalPhoneBill function' , function() {

    it('It should return "2.75") ' , function(){
        
        assert.deepEqual(totalPhoneBill('l'), "R2.75");
    });
    it('It should return "R0.65") ' , function(){
        
        assert.deepEqual(totalPhoneBill('m'), "R0.65");
    });
  
});