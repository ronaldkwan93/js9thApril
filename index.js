require('dotenv').config();

console.log(process.env.ENVIRONMENT_FILE)

console.log("Starting!")

const pokemon = require('pokemon');

let randomPokemon = pokemon.random();

console.log(`Today's favourite Pokemon is ${randomPokemon}`)