describe('Test my countAllFromTown function', function () {

    it('that takes a string parameter with registration numbers separated with commas and the registration number start string. It should return number registration numbers in the string that is for that town. ', function () {

        assert.deepEqual(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3);
    });

    it('that takes a string parameter with registration numbers separated with commas and the registration number start string. It should return number registration numbers in the string that is for that town. ', function () {

        assert.deepEqual(countAllFromTown('CY 567,CL 345, CJ 456,CL 341','CL'), 2);
    });
});