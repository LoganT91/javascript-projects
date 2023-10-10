// launchcode.test.js code:
const index = require('../index.js');


describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("Testing launchcode", function(){
    expect(launchcode.organization).toBe('nonprofit')
  });
  test("Testing executiveDirector", function() {
    expect(launchcode.executiveDirector).toBe("Jeff")
  });
  test("Testing percentageCoolEmployees", function(){
    expect(launchcode.percentageCoolEmployees).toBe(100)
  });
  test("Testing programsOffered array", function(){
    expect(launchcode.programsOffered).toContain('Web Developement')
    expect(launchcode.programsOffered).toContain('Data Analysis')
    expect(launchcode.programsOffered).toContain('Liftoff')
    expect(launchcode.programsOffered.length).toBe(3)
  });
});

describe("Testing launchOutput", function(){
  test('Testing when passed a number that is ONLY divisible by 2, launchOutput() returns "Launch!"', function(){ 
    expect(index.launchOutput(2).toBe('Launch!'))
  });
});
