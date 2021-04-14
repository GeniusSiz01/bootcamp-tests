/*console.log(greet('Rennay'))
console.log(greet('SIzwe'))
console.log(greet('Mosima'))*/

describe('Test my greet function' , function(){
    it("it should return 'Hello, Sizwe' when called with 'Sizwe' " , function(){
          
        assert.equal("Hello, Sizwe", greet("Sizwe"), "this should not be true");

        
    });
    it("it should return 'Hello, Rennay' when called with 'Rennay' " , function(){
          
        assert.equal("Hello, Rennay", greet("Rennay"), "this should not be true");

        
    });
});