document.addEventListener("DOMContentLoaded", () => { // loads the file

let guessedWords = [[]]; // Array containing array of guessed words

let keys = document.querySelectorAll('.keyboard-row button'); // stores each key in same variable

let availableSpace = 1;

let correctWord = 'raise'; // Correct word


let guessedWordCount = 0;


function getTileColour (letter, index) {
    const isCorrectLetter = correctWord.includes(letter); // checks if correct word features inputted letter

    if (!isCorrectLetter) { // if no matches are found
        return "rgb(128,0,0)";
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

    let currentWordArr = getCurrentWordArr();


    if (currentWordArr.length !== 5) { // Alerts user if they press Enter without inputting in five letters
        console.log("User has not entered in five letters");
        // body.className = "success"; // Unleashes CSS effects
        window.alert("Answer must be five letters");
    }

    let currentWord = currentWordArr.join(''); // joins method joins word into a string
    
    const firstLetterId = guessedWordCount * 5 + 1;

    const interval = 200; // setTimeout

       currentWordArr.forEach((letter, index) => {
        setTimeout(() => { // asychronous JS for applying colour effects to letters after user presses Enter
            const letterSquare = getTileColour(letter, index);

            const letterId = firstLetterId + index;
            
            const letterEl = document.getElementById(letterId);
            
            letterEl.classList.add('animate__flipInY');
            
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
    const currentWordArr = getCurrentWordArr(); // same variable as declared in handleSubmitWord function
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

function getCurrentWordArr() {
    const numberOfGuessedWords = guessedWords.length;
    return guessedWords[numberOfGuessedWords - 1]; // subtracts -1 from the number of guess words
}

function updateGuessedWords(letter) {
    const currentWordArr = getCurrentWordArr(); 

    console.log(currentWordArr);
    
    if (currentWordArr && currentWordArr.length < 5) {
        currentWordArr.push(letter);

        const availableSpaceEl  = document.getElementById(availableSpace);

        availableSpace = availableSpace + 1;

        availableSpaceEl.textContent = letter;     
        
    }

    }

});