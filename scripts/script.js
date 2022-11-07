
let guessedWords = [[]];

document.addEventListener("DOMContentLoaded", () => {

let keys = document.querySelectorAll(".keyboard-row button");

let availableSpace = 1;

let word = 'raise';
let guessedWordCount = 0;

function handleSubmitWord() {
    const currentWordArr = getCurrentWordArr();

    const currentWord = currentWordArr.join(''); // joins word into a string

    const firstLetterId = guessedWordCount * 5 + 1;
            
    // const interval = 300;

    
    currentWordArr.forEach((letter, index) => {
        setTimeout(() => {
            const letterSquareColour = "rgb(255,165,0)";


            const letterId = firstLetterId + index;
            const letterElement = document.getElementById(letterId);
            letterElement.classList.add('animate__flipInY');
            letterElement.style = `background-color:${letterSquareColour};border-color:${letterSquareColour}`;

        }, 200);
    })

}


for (let i = 0; i < keys.length; i++) {

    keys[i].onclick = ( { target } ) => {

        const letter = target.getAttribute("data-key");

        if  (letter === 'enter') {
            handleSubmitWord()
            return;
        }

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

    console.log(currentWordArr);
    
    if (currentWordArr && currentWordArr.length < 5) {
        currentWordArr.push(letter);

        const availableSpaceElement  = document.getElementById(availableSpace);

        availableSpace = availableSpace + 1;

        availableSpaceElement.textContent = letter;     
        
    }


    }

});