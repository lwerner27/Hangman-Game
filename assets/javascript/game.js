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
// A variable that holds the boolean for playing again
let playAgain;
// A Variable that holds the win count
let winCounter = 0;
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
// An array of all the image paths need for the game image
const imgPaths = [
    "./assets/images/hangmanImages/0-hangman.png",
    "./assets/images/hangmanImages/1-hangman.png",
    "./assets/images/hangmanImages/2-hangman.png",
    "./assets/images/hangmanImages/3-hangman.png",
    "./assets/images/hangmanImages/4-hangman.png",
    "./assets/images/hangmanImages/5-hangman.png",
    "./assets/images/hangmanImages/6-hangman.png",
    "./assets/images/hangmanImages/YouWin.png"
]

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
}

// A function for reseting the game after a win or loss
function resetGame() {
    playAgain = confirm("Would you like to play again?");

    if (playAgain) {
        badGuessCounter = 0;
        hiddenChamp = [];
        guessedLetters = [];
        currentChamp = randomChamp()
        currentChampArr = splitChamp(currentChamp)
        createBlanks(currentChampArr)
        changeToString(hiddenChamp)
        updateScreen();
        console.log(currentChamp)
    }
}

// A function that updates the screen
function updateScreen() {
    document.getElementById("guessed-letters").innerHTML = guessedLetters;
    document.getElementById("champ-name").innerHTML = blankString;

    if (badGuessCounter <= 6) {
        document.getElementById("hangman-img").src = imgPaths[badGuessCounter]
    }
}

// A function that checks to see if they player won
function winCheck() {
    if (blankString === currentChamp) {
        document.getElementById("hangman-img").src = imgPaths[7];
        winCounter++;
        resetGame();
    } else if (badGuessCounter === 6) {
        resetGame();
    }
}




// Function Calls
// ---------------------------------------------------------------------------------------------------

// Generates a random champ and prints it to the console

// console.log(currentChamp)

// // turns the current champ variable into an array and prints it to the console
// currentChampArr = splitChamp(currentChamp)
// console.log(currentChampArr)

// // Takes in the current champ array to set the number of blanks needed
// createBlanks(currentChampArr)
// console.log(hiddenChamp)

// // Turns the hiddenChamp array into string
// changeToString(hiddenChamp)
// console.log(blankString)





// Actual Game Call

// these functions set up the game
currentChamp = randomChamp()
currentChampArr = splitChamp(currentChamp)
createBlanks(currentChampArr)
changeToString(hiddenChamp)
console.log(currentChamp)

// This adds the blank spaces to the page
document.getElementById("champ-name").innerHTML = blankString;

document.onkeyup = function(event) {
    let pressedKey = event.key;

    checkForLetter(pressedKey);
    updateScreen();
    winCheck();
}