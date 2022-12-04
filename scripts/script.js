document.addEventListener("DOMContentLoaded", () => { // loads the file

let guessedWords = [[]]; // Array containing array of guessed word

let keys = document.querySelectorAll('.keyboard-row button'); // stores each key in same variable

let availableSpace = 1; // initialised number of letters available in each guessed word

let correctWord = 'raise'; // Correct word

let guessedWordCount = 0; // increments to one at end of this test


function generateLetterSquareColour (letter, index) {
    const isCorrectLetter = correctWord.includes(letter); // checks if correct word features inputted letter
                                                          // includes method returns boolean true or false

    if (!isCorrectLetter) { // if no matches are found
        for(let val=1 ; val <= 5; val++){
            console.log(val);
           document.getElementById(val).style.color = "white";
        }
        return "rgb(58,58,60)";
    }

    const letterInPosition = correctWord.charAt(index); // Returns the respective letter of each numeric point in the word, 
                                                // e.g., in correct word, r for 1, a for 2, etc.
    console.log(letterInPosition);
    const ifLetterFeaturesInCorrectWord = letter === letterInPosition; // if letter features in correct word, 
                                                                       // whether in correct position or not    

    if (ifLetterFeaturesInCorrectWord) {
        return "rgb(83,141,78)"; // if inputted letter is in same position as corresponding letter in correct word

    }
        return "rgb(181,159,59)"; // if inputted letter is in correct word, but not in corresponding position

}

function handleSubmittedWord() {

    let currentWordArr = getCurrentWordArray();

    document.getElementById("gameresponse").innerHTML = '';
   

    let currentWord = currentWordArr.join(''); // join method is used turn five letters in array into a string
    
    const firstLetterId = guessedWordCount * 5 + 1; // the first letter ID in an attempt at a word
                                                    // guessedWordCount * 5 + 1 would be the first letter ID in each row 
                                                    // if there were multiple rows

    const interval = 150; // setTimeout interval time

       currentWordArr.forEach((letter, index) => {
        setTimeout(() => { // asychronous JS for applying colour effects to letters after user presses Enter
            const letterSquare = generateLetterSquareColour(letter, index);

            let letterId = firstLetterId + index; // gets the ID of each specific letter in an attempted word
                                                  // (zero-index based)
            console.log(letterId);
            
            const letterElement = document.getElementById(letterId); // stores letterID of each specific letter in variable
                        
            letterElement.style = `background-color:${letterSquare};border-color:${letterSquare}`;

        }, interval * index); // interval asychronous JS occurs for each letter once user has pressed Enter
    });

    guessedWordCount += 1; // increments the amount of guessed words by one

    if (currentWordArr.length !== 5) { // Alerts user if they press Enter without inputting in five letters
        console.log("User has not entered in five letters", currentWordArr.length);
       // body.className = "success"; // Unleashes CSS /// console.log('numberOfWORDS', numberOfGuessedWords);

        document.getElementById("gameresponse").innerHTML = "Answer must be five letters";
   
       
    }
  
    if (currentWord === correctWord) {
        window.alert("Correct guess!");
    }
    guessedWords.push([]);
            
}

function handleDeletedLetter() {
    const currentWordArr = getCurrentWordArray(); // same variable as declared in handleSubmitWord function
    currentWordArr.pop(); // pop method is used to delete last letter one by one

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
    let currentWordArr = getCurrentWordArray(); // takes the function above and updates the current word array

    console.log(currentWordArr);
    
    if (currentWordArr && currentWordArr.length < 5) { // Updates each currentWordArray, and pushes inputted letter into array
        currentWordArr.push(letter);                   // if less than five 

        const emptyLetterSquare  = document.getElementById(availableSpace); // emptyLetterSquare corresponds to each available 
                                                                                // lettersquare / box
        availableSpace = availableSpace + 1; // updates amount of available space

        emptyLetterSquare.textContent = letter; // letter is passed into each available lettersquare / box 
        
    }

    }

});