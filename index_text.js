var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('output must be 5! equal to 120', function() {
      assert.equal(Calculate.factorial(5), 120)
    // Setup
      const inputNumber = 5;
      const expectedResult = 120;
    // Exercise
      const result = Calculate.factorial(inputNumber);
    // Verify
      assert.equal(result, expectedResult)
    })
    it('returns 6 when 3 is passed', function() {
  
    // Setup
      const inputNumber = 3;
      const expectedResult = 6;
    // Exercise
      const result = Calculate.factorial(inputNumber);
    // Verify
      assert.equal(result, expectedResult)
    })
    it('returns 1 when you pass in 0', function() {
      assert.equal(Calculate.factorial(0), 1);
      
    })
  });
});
