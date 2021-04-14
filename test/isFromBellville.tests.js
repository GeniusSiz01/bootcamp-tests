/*console.log(isFromBellville("CY"))
console.log(isFromBellville("CA"))
console.log(isFromBellville("DY"))*/

describe('Test my isFromBellvile function' , function(){
    it('It should only return "true" for "CY" ' , function(){
        assert.equal(true,isFromBellville("CY"));

        /*assert.deepEqual([2,2],[2,2]);*/
    });
    it('It should return "false" for  for anything outside of "CY" ' , function(){
        assert.equal(false, isFromBellville("CA"));

        /*assert.deepEqual([2,2],[2,2]);*/
    });

});