describe('Test my totalPhoneBill function' , function() {

    it('that takes in a string calls made and "sms,s" sent. Calculate the total bill for the data provided. there are 2 calls and 3 sms,s") ' , function() {
        
        assert.deepEqual(totalPhoneBill('l'), "R2.75");
    });
    it('It should return "R0.65") ' , function(){
        
        assert.deepEqual(totalPhoneBill('m'), "R0.65");
    });
  
});