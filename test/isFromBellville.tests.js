/*console.log(isFromBellville("CY"))
console.log(isFromBellville("CA"))
console.log(isFromBellville("DY"))*/

describe('Test my isFromBellvile function' , function(){
    it('that returns "true" if a registration number is for Bellville otherwise returns "false". Registration numbers for Bellville starts with "CY". ' , function(){
        assert.equal(true,isFromBellville("CY"));

        /*assert.deepEqual([2,2],[2,2]);*/
    });
    it('that returns "true" if a registration number is for Bellville otherwise returns "false". Registration numbers for Bellville starts with "CY". ' , function(){
        assert.equal(false, isFromBellville("CA"));

        /*assert.deepEqual([2,2],[2,2]);*/
    });

});