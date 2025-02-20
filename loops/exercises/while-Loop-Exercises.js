//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');
let startFuelL = input.question("what is starting fuel level?");
let astroNum = input.question('how many astronauts on board?');
let alt = 0;





/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

  while (startFuelL < 5000 || startFuelL > 30000) {
  console.log(`sorry, ${startFuelL} is not a valid fuel level, please insert a number between 
  5000 and 30000.`);
  startFuelL = input.question("what is starting fuel level?");
}
console.log('Fuel is good');



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
 while (astroNum < 1 || astroNum > 7) { 
    console.log(`sorry, ${astroNum} is not valid number of astronauts. must have between
    1 and 7.`);
    astroNum = input.question('how many astronauts on board?');
 }
  console.log(`Good number of astronauts`);

  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (startFuelL-100*astroNum >= 0){ 
  alt += 50;
  startFuelL -= 100*astroNum;
}


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log(`The shuttle gained an altitude of ${alt} km.`);
if (alt >= 2000) {
  console.log('Orbit Achieved');
} else {
  console.log('Failed to reach orbit');
}