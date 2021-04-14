
describe('Test my regCheck function' , function(){
    it('It should return "true" if registration is from "GP" ' , function(){
        
        assert.deepEqual(regCheck('DV 23 NB GP', 'GP'), true);

    });

    it('It should return "false" if the registration number is not from "MP" ' , function(){
        assert.deepEqual(regCheck('DV 23 LP GP', 'MP'), false);
        

    });
    
    it('It should return "true" if the registration number is from "CY" ' , function(){
        assert.deepEqual(regCheck('CY 189-012', 'CY'), false);
        

    });

});
