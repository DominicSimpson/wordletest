document.addEventListener("DOMContentLoaded", () => { // loads the file

let guessedWords = [[]]; // Array containing arrays of each guessed word

let keys = document.querySelectorAll('.keyboard-row button'); // stores each key in same variable

let availableSpace = 1; // initialised number of letters available in each guessed word

let correctWord = 'raise'; // Correct word


let guessedWordCount = 0;


function getTileColour (letter, index) {
    const isCorrectLetter = correctWord.includes(letter); // checks if correct word features inputted letter

    if (!isCorrectLetter) { // if no matches are found
        return "rgb(128,0,0)";
        body.className = "wordleletter";
    }

    const letterInPosition = correctWord.charAt(index); // Returns the respective letter of each numeric point in the word, 
                                                // e.g., in word, 1 is r, 2 is a, etc.
    console.log(letterInPosition);
    const isCorrectPosition = letter === letterInPosition;    

    if (isCorrectPosition) {
        return "rgb(83,141,78)"; // if inputted letter is in same position as corresponding letter in correct word

    }
        return "rgb(181,159,59)"; // if inputted letter is in correct word, but not in corresponding position

}


function handleSubmittedWord() {

    let currentWordArr = getCurrentWordArray();


    if (currentWordArr.length !== 5) { // Alerts user if they press Enter without inputting in five letters
        console.log("User has not entered in five letters");
        // body.className = "success"; // Unleashes CSS effects
        message.innerHTML = "Answer must be five letters";
    }

    let currentWord = currentWordArr.join(''); // joins method joins word into a string
    
    const firstLetterId = guessedWordCount * 5 + 1;

    const interval = 200; // setTimeout

       currentWordArr.forEach((letter, index) => {
        setTimeout(() => { // asychronous JS for applying colour effects to letters after user presses Enter
            const letterSquare = getTileColour(letter, index);

            const letterId = firstLetterId + index;
            
            const letterEl = document.getElementById(letterId);
                        
            letterEl.style = `background-color:${letterSquare};border-color:${letterSquare}`;

        }, interval * index);
    });

    guessedWordCount += 1;

    if (currentWord === correctWord) {
        window.alert("Correct guess!");
    }

    guessedWords.push([]);
            
}

function handleDeletedLetter() {
    const currentWordArr = getCurrentWordArray(); // same variable as declared in handleSubmitWord function
    currentWordArr.pop(); // pop method is used to delete letter one by one if required

    guessedWords[guessedWords.length - 1] = currentWordArr; // takes the currentWordArr and assigns it to guessWords
                                                            // variable without last letter
    const lastLetter = document.getElementById(String(availableSpace - 1)); // String constructor is used to create a new string object
    // lastLetter is always the last letter in the five-letter sequence
    lastLetter.textContent = "";
    availableSpace = availableSpace - 1;
}


for (let i = 0; i < keys.length; i++) { // gets the selected letter from the keypad

    keys[i].onclick = ( { target } ) => {

        const letter = target.getAttribute('data-key'); // gets the individual letter

        if  (letter === 'enter') { // if the user clicks enter
            handleSubmittedWord();
            return; 
        }

        if (letter === 'delete') { // if the user clicks delete
            handleDeletedLetter(); 
            return;
        }

        console.log(letter);

        updateGuessedWords(letter);

    }
}

function getCurrentWordArray() { 
    const numberOfGuessedWords = guessedWords.length; // stores number of guessed words in variable
    return guessedWords[numberOfGuessedWords - 1]; // subtracts -1 from the number of guessed words after user inputs guessed word
}

function updateGuessedWords(letter) { 
    const currentWordArr = getCurrentWordArray(); // takes the function above and updates the current word array

    console.log(currentWordArr);
    
    if (currentWordArr && currentWordArr.length < 5) { // Updates each currentWordArray, and pushes inputted letter into array
        currentWordArr.push(letter);                   // if less than five 

        const availableSpaceElement  = document.getElementById(availableSpace); // availableSpaceElement corresponds to each avaiable 
                                                                                // lettersquare / box
        availableSpace = availableSpace + 1;

        availableSpaceElement.textContent = letter;     
        
    }

    }

});