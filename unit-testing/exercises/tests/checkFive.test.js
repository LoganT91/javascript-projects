//const test = require('../checkFive.js');
const checkFive = require('../checkFive');

describe("checkFive", function(){

   test("check whether or not checkFive works", function(){
      expect(checkFive(2)).toEqual("2 is less than 5.");
   });

});