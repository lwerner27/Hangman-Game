// Variables, Objects, Functions and Arrays
let currentChamp;
let currentChampArr = [];
let hiddenChamp = [];

const champs = [
    "aatrox", 
    "ashe", 
    "diana", 
    "galio", 
    "illaoi", 
    "ivern", 
    "jax", 
    "karthus", 
    "kayne", 
    "nasus", 
    "nocturne", 
    "olaf", 
    "rammus",
    "renekton", 
    "sejauni", 
    "shyvana", 
    "tristana",
    "volibear", 
    "warwick", 
    "zac"
];

// Returns a random champion from the champs array
function randomChamp() {
    let randomNumber = Math.floor(Math.random()*20)
    return champs[randomNumber];
}

// splits currentChamp into an array
function splitChamp(champ) {
    return champ.split("")
}

// Adds the required number of blank spaces to the hiddenChamp array
function createBlanks(array) {
    let numberOfBlanks = array.length
    console.log(numberOfBlanks)

    for (let i = 0; i < numberOfBlanks; i++) {
        hiddenChamp.push("_ ")
    }
}

// Starts the game
function startGame() {

}


// Function Calls
currentChamp = randomChamp()
console.log(currentChamp)

currentChampArr = splitChamp(currentChamp)
console.log(currentChampArr)

// Takes in the current champ array to set the number of blanks needed
createBlanks(currentChampArr)
console.log(hiddenChamp)