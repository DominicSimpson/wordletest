document.addEventListener("DOMContentLoaded", () => {

let guessedWords = [[]];


let keys = document.querySelectorAll('.keyboard-row button');

let availableSpace = 1;

let word = 'raise'; // Correct word


let guessedWordCount = 0;


function getTileColor (letter, index) {
    const isCorrectLetter = word.includes(letter); // checks if inputted letter features in correct word

    if (!isCorrectLetter) {
        return "rgb(58,58,60)";

    }

    const letterInPosition = word.charAt(index); // Returns the respective letter of each numeric point in the word, 
                                                // e.g., in word, 1 is r, 2 is a, etc.
    console.log(letterInPosition);
    const isCorrectPosition = letter === letterInPosition;    

    if (isCorrectPosition) {
        return "rgb(83,141,78)"; // if inputted letter is in same position as corresponding letter in correct word

    }
        return "rgb(181,159,59)"; // if inputted letter is in correct word, but not in corresponding position

}


function handleSubmitWord() {

    let currentWordArr = getCurrentWordArr();

    if (currentWordArr.length !== 5) {
        window.alert("Answer must be five letters");
    }

    let currentWord = currentWordArr.join(''); // joins word into a string
    
    const firstLetterId = guessedWordCount * 5 + 1;

    const interval = 200;

       currentWordArr.forEach((letter, index) => {
        setTimeout(() => {
            const tileColor = getTileColor(letter, index);

            const letterId = firstLetterId + index;
            
            const letterEl = document.getElementById(letterId);
            
            letterEl.classList.add('animate__flipInY');
            
            letterEl.style = `background-color:${tileColor};border-color:${tileColor}`;

        }, interval * index);
    });

    guessedWordCount += 1;

    if (currentWord === word) {
        window.alert("Correct guess!");
    }

    guessedWords.push([]);
            
}


for (let i = 0; i < keys.length; i++) { // gets the selected letter from the keypad

    keys[i].onclick = ( { target } ) => {

        const letter = target.getAttribute('data-key'); 

        if  (letter === 'enter') {
            handleSubmitWord(); 
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