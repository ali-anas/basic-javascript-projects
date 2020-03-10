// program data;
var number = Math.floor(Math.random() * 100) + 1;
let guess;
var limit = 5;
let won = false;
let msg = "";
let guesses = [];

// funtion
let isPreviouslyGuessed = (guess) => {
    for(let i = 1; i < guesses.length; i++) {
        if(guesses[i] == guess) {
            return true;
        }
    }
    return false;
}


for(let i = 1; i <= limit; i++ ) {
    // prompt user for their guess
    do {
        guess = parseInt(prompt("Guess a number"));
    } while(isNaN(guess) || isPreviouslyGuessed(guess));

    // if correct: let the user know they won
    if(guess == number) {
        won = true;
        msg = "Correct! You won.";
        break;
    }

    // if incorrect: let the user know
    else {
        guesses[i] = guess;
        alert("incorrect. \nYou have guessed: " + guesses.toString() 
               + "\nTries remaining: " + (limit - i));
    }
}

if (!won) {
    msg = "Sorry, you ran out of tries. Game over <br> The correct number was: " + number;
}

document.getElementById("message").innerHTML = msg;
