// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftoff = true;


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7){
} else {
    console.log("Astronaut count is too high");
}
// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {
} else {
    console.log("Not Ready");
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit) {
} else {
    console.log("Mass has exceeded limit");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius > -300 || fuelTempCelsius < -150) {
} else {
    console.log("Fuel Temp not in range");
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%") {
} else {
    console.log("Fuel level not full");
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear"){
} else {
    console.log("Caution, weather not clear");
}
// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftoff === true) {
    console.log("All systems are a go! Initiating Launch Sequence");

console.log("Date: " + date);
console.log("Time: " + time);
console.log("Astronaut Count: " + astronautCount);
console.log("Crew Mass: " + crewMassKg);
console.log("Fuel Mass: " + fuelMassKg);
console.log("Shuttle Mass: " + shuttleMassKg);
console.log("Total Mass: " + totalMassKg);
console.log("Fuel Temp: " + fuelTempCelsius);
console.log("Weather Status: " + weatherStatus);
console.log("Have a Safe Trip");
} else {
    console.log('systems are not go.')
}

