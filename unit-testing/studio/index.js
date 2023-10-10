
let launchcode = {
  organization: 'nonprofit',
  executiveDirector: 'Jeff',
  percentageCoolEmployees: 100,
  programsOffered: ['Web Developement', 'Data Analysis', 'Liftoff']
};

function launchOutput(num){
  if (num % 2 === 0){
    return "Launch!";
  };
  if (num % 3 === 0){
    return "Code!"
  };
};

module.exports = {
  launchcode: launchcode,
  launchOutput: launchOutput
}
