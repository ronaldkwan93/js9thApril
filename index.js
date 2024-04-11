require('dotenv').config();

console.log(process.env.ENVIRONMENT_FILE)

console.log("Starting!")

const pokemon = require('pokemon');

let randomPokemon = pokemon.random();

console.log(`Today's favourite Pokemon is ${randomPokemon}`)




function app() {
    var prompt = require('prompt-sync')({sigint: true});
    
    let userWantsToExit = false;
    
    do {
        var n = parseFloat(prompt('What number of Pokemon do you want to see?'));
        console.log("Input is not a number:" + Number.isNaN(n));
    
        if (Number.isNaN(n)) {
            throw new Error("User did not enter a number!")
        }
    
        console.log("User entered: " + n)
    
        let userInputToExit = prompt("Would you like to try again?")
    
        if(userInputToExit == "y") {
            userWantsToExit = false;
        } else {
            userWantsToExit = true;
        }
    
    } while (userWantsToExit == false);

}

try {
    app();
} catch (error) {
    console.log("Shutting down");
    console.log(error.message)
}