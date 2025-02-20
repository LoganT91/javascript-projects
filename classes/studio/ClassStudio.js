//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
const input = require('readline-sync');

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name,
        this.mass = mass,
        this.scores = scores
    }
    addingScores(){
        let scores = [''];
        let newScore = input.question(`What is your newest score?
        Enter Here: `);
        if(newScore <= 100 && newScore >= 0){
            newScore.push(scores);
        } else {
            throw Error ('Not a Valid Score');
        }
    };
};
    let bubbaBear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
    let merryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
    let gladGator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);




//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
console.log(bubbaBear.addingScores);


