// Declare and assign the variables below
let spaceShuttle = "Determination";
let speedMph = 17500;
let marsKm = 225000000;
let moonKm = 384400;
let milesPerKm = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof spaceShuttle);
console.log(typeof speedMph);
console.log(typeof marsKm);
console.log(typeof moonKm);
console.log(typeof milesPerKm);
// Calculate a space mission below
let mileToMars = marsKm * milesPerKm;
let hrsToMars = mileToMars / speedMph;
let daysToMars = hrsToMars / 24;

// Print the results of the space mission calculations below
console.log(spaceShuttle + " will take " + daysToMars + " days to get to Mars.");

// Calculate a trip to the moon below
let mileToMoon = moonKm * milesPerKm;
let hrsToMoon = mileToMoon / speedMph;
let daysToMoon = hrsToMoon / 24;

// Print the results of the trip to the moon below
console.log(spaceShuttle + " will take " + daysToMoon + " days to get to the moon.");
