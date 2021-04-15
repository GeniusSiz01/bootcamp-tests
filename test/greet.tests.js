describe('Test my greet function', function () {
    
    it("that takes your name as a parameter and returns a greeting message to looking like this 'Hello, Sizwe' ", function () {

        assert.equal("Hello, Sizwe", greet("Sizwe"));


    });
    it("that takes your name as a parameter and returns a greeting message to looking like this 'Hello, Rennay' ", function () {

        assert.equal("Hello, Rennay", greet("Rennay"));


    });
});