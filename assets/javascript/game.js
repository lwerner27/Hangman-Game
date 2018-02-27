// Variables, Objects and Arrays
// ---------------------------------------------------------------------------------------------

// Randomly selected champ name
let currentChamp;
// Selected champ name turned into an array
let currentChampArr = [];
// An array that has blank spaces equal to the number of lets in the champs name
let hiddenChamp = [];
// The hiddenChamp array turned into a string for the purpose sending to the dom
let blankString;
// Counts the number of guess where the letter is not in the champs name
let badGuessCounter = 0;
// an array of all the letters that have been guess
let guessedLetters = [];
// An array of the names to choose from for the game
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

// Function Declarations
// ----------------------------------------------------------------------------------------

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

// Join elemetns of array into single string
function changeToString(hiddenArr) {
    blankString = hiddenArr.join('')
}

// A function that checks to see if the key pressed is in the in the currentChampArr
function checkForLetter(letter) {
    guessedLetters.push(letter);
    if (currentChampArr.includes(letter)) {
        for (let i = 0; i < hiddenChamp.length; i++ ) {
            if (currentChampArr[i] === letter) {
                hiddenChamp[i] = letter;
            }
        }
    } else {
        badGuessCounter++
    }
    changeToString(hiddenChamp);
    console.log(blankString);
}

// Starts the game
function startGame() {

}


// Function Calls
// ---------------------------------------------------------------------------------------------------

// Generates a random champ and prints it to the console
currentChamp = randomChamp()
console.log(currentChamp)

// turns the current champ variable into an array and prints it to the console
currentChampArr = splitChamp(currentChamp)
console.log(currentChampArr)

// Takes in the current champ array to set the number of blanks needed
createBlanks(currentChampArr)
console.log(hiddenChamp)

// Turns the hiddenChamp array into string
changeToString(hiddenChamp)
console.log(blankString)

// Adds the the guessed letter tothe guessedLetters array and print the aray to the console
checkForLetter("x")
console.log(guessedLetters)
console.log(badGuessCounter)