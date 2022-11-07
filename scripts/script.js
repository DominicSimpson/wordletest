
const guessedWords = [[]];

document.addEventListener("DOMContentLoaded", () => {

const keys = document.querySelectorAll(".keyboard-row button");

let availableSpace = 1;

for (let i = 0; i < keys.length; i++) {

    keys[i].onclick = ( { target } ) => {

        const letter = target.getAttribute("data-key");

        console.log(letter);

        updateGuessedWords(letter);

    }
}

function getCurrentWordArr() {
    const numberOfGuessedWords = guessedWords.length;
    return guessedWords[numberOfGuessedWords - 1];
}

function updateGuessedWords(letter) {
    const currentWordArr = getCurrentWordArr(); 
    
    if (currentWordArr && currentWordArr.length < 5) {
        currentWordArr.push(letter);

        const availableSpaceElement  = document.getElementById(String(1));

        availableSpace= availableSpace + 1;

        availableSpaceElement.textContent = letter;
    }
}

});