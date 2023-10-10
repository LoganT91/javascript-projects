// launchcode.test.js code:
const index = require('../index.js');


describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("Testing launchcode", function(){
    expect(index.launchcode.organization).toBe('nonprofit')
  });
  test("Testing executiveDirector", function() {
    expect(index.launchcode.executiveDirector).toBe("Jeff")
  });
  test("Testing percentageCoolEmployees", function(){
    expect(index.launchcode.percentageCoolEmployees).toBe(100)
  });
  test("Testing programsOffered array", function(){
    expect(index.launchcode.programsOffered).toContain('Web Developement')
    expect(index.launchcode.programsOffered).toContain('Data Analysis')
    expect(index.launchcode.programsOffered).toContain('Liftoff')
    expect(index.launchcode.programsOffered.length).toBe(3)
  });
});

describe("Testing launchOutput", function(){
  test('Testing when passed a number that is ONLY divisible by 2, launchOutput() returns "Launch!"', function(){ 
    expect(index.launchOutput(2)).toBe('Launch!')
  });
  test("Testing when passed a number that is ONLY divisible by 3, return 'Code!'", function(){
    expect(index.launchOutput(3)).toBe('Code!')
  });
});
