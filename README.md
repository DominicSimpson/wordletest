# Wordle Challenge Attempt

---

## Background

![screenshot(2)](https://user-images.githubusercontent.com/52511353/205694523-24380e50-d87d-46f6-8e64-19f6f970b0f1.png)

### Wordle is an online game in which the player is given six attempts to uncover a secret, correct word, which is usually five letters long (but may be longer or less in other interations). The screenshot above shows my own attempt at the *New York Times* version of the game, with one remaining chance to spare. The player wins if they guess the correct word, which in this case is 'woken'.

### The colour coding in the example above relates to the following:

- Grey: Inputted letter does not feature in correct word 
- Yellowish tinge: Inputted letter does feature in correct word, but not at the same position in word
- Green: Inputted letter features in correct word, and at the correct position in word

### For this take-home challenge, I am going to look solely at how the code behind Wordle assesses whether an inputted letter from a user exists in the correct, secret word, and if so, if it corresponds to the correct position or not. I will not be using an API, as the test only needs to be done once, so I do not need to generate new correct words each time (although the user is welcome to try the test as many times as they want by refreshing the browser). This is also why I am only employing one row of what I call 'lettersquares' (or boxes, or text boxes), rather than six, as in the professional *NYT* version. Despite this, the code involves numerous functions and variables in order to work, with a complicated logic.

---

## The Code

###### I set up the lettersquares and keyboard in the HTML (I could've used the QWERTY system, as the *NYT* version does, but settled on an alphabetic keyboard). Each keyboard letter is stored in the same variable, `keys`, first of all. An iteration through the `keys` variable gets the individual inputted letter, stored in the variable `letter`, plus discerns if the user has pressed Enter or Delete, both of which trigger appropriate functions. The `updateGuessedWords` function is also triggered, which increments the amount of times the user attempts to uncover the correct word (in this version, it will only be once, but in professional versions such as the *NYT*'s, it would be six). 

```for (let i = 0; i < keys.length; i++) { // gets the selected letter from the keypad

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
```

###### Meanwhile, I set the correct, secret word as 'raise', in a variable called `correctWord`.

###### The functions that are the most important here are the `handleSubmittedWord` and `checkLetter` functions. 

- `handleSubmittedWord`

###### If the user clicks enter, this triggers the `handleSubmittedWord` function. The function takes the current array of the inputted letters and stores it in a variable called `currentWordArr`. The `join` method is then used on this variable to convert it to a string, deleting any separators like commas along the way, and the result is stored in a variable called `currentWord`. A `forEach` method then iterates over each index element of the `currentWordArr`, which triggers a callback function that in turn triggers the `checkLetter` function on every letter of the submitted word. Meanwhile, the ID of each specific letter in the submitted word is stored in a variable called `letterElement`, which is then used to trigger the visual colour effect on each lettersquare, connected to the `checkLetter` function, and via asychronous JS. If the `currentWordArr`'s length is less than five letters and the user clicks submit, a message tells them that the answer must be five letters. If the user guesses all the correct letters in the correct position, `currentWord` === `correctWord`, and a congratulations messsage appears.   

- `checkLetter`

###### The `checkLetter` function takes two parameters, the aforementioned letter and the index point of each of those letters in the submitted word. The `includes` method, which determines whether a given value includes a certain value among the value's elements, is used on the `correctWord` variable to test if that variable includes the letter parameter, and is converted to the variable `isCorrectLetter`, which now returns a Boolean (which the `includes` method is). If `isCorrectLetter` as a Boolean returns false, that means that no matches are found between the inputted letter and the letters of the correct word; this then triggers the grey colour mentioned above via `return "rgb(58,58,60)"`. However, black text on grey is hard to read, so I had to set up a for loop on each value - each letter - so as to iterate through each value and apply a white colour to the font. This turned out to be tricky, as the last letter in grey would not feature in white, so the way to do it was to set up an array called `finalWordArray`, which contains the numerical values of each letter in a submitted word, and iterated through it.    

###### Meanwhile, if the inputted letter *does* feature in the correct word, whether or not in the correct position, the above is skipped, and the function instead takes the `correctWord` variable and returns the respective letter of each numeric point in the correct word (e.g. 'r' for 1, 'a' for 2, etc.) via the `charAt` method. The `charAt` method does this by taking the index point of each letter in `correctWord` as a parameter. This is then stored in a variable called `letterInPosition`. The letter parameter (the inputted letter) is then tested against this variable using strict equality, and if it is equal - that is, if the inputted letter matches the correct letter in the correct position in the correct word - it's stored in a Boolean variable called `ifLetterFeaturesInCorrectWord`. If `ifLetterFeaturesInCorrectWord` returns true, the colour green is unleashed via `return "rgb(83,141,78)"`, denoting success. If `ifLetterFeaturesInCorrectWord` returns false, the yellowish tinge is unleashed via `return "rgb(181,159,59)"`, denoting that the inputted letter does feature in the correct word, but not in the correct position.  
---



| Variables                       | Description                                                                                 | Type                  |
| -------------                   |:-------------:                                                                              | -----:                |
| correctWord                     | The correct, secret word that users have to try and guess                                   | Variable              |
| keys                            | Stores each key (A-Z) in one variable                                                       | DOM Variable          |
| letter                          | Gets the individual inputted letter                                                         | DOM Variable          |
| guessedWords                    | Array containing arrays of each guessed word                                                | Variable              |
| availableSpace                  | Number of letters available in each attempt at a guess                                      | Variable              |
| guessedWordCount                | Increments to one at end of this test (initialized to zero)                                 | Variable              |
| numberOfGuessedWords            | Stores number of guessed words in variable                                                  | Variable              |
| ifLetterFeaturesInCorrectWord   | If letter features in correct word, at correct position                                     | Variable              |
| isCorrectLetter                 | Checks if correct word features inputted letter                                             | Variable              |
| letterInPosition                | Returns the respective letter of each numeric point in the correct word                     | Variable              |
| currentWordArr                  | Array containing current attempt at guessing the correct word                               | Variable              |
| finalWordArr                    | Array containing the values of each letter in current attempt at guessing the correct word  | Variable              |
| currentWord                     | Five letter string of current attempt at guessing the correct word                          | Variable              |
| firstLetterId                   | First letter ID in attempt at guessing word                                                 | Variable              |
| lastLetter                      | Gets last letter so as to enable Delete letter function                                     | DOM Variable          |
| emptyLetterSquare               | Corresponds to each available lettersquare / box                                            | DOM Variable          |
| interval                        | setTimeout interval time for colour effect on letters after user presses enter              | DOM Variable          |

Pseudocode:

```js
const correctWord = 'raise' > the correct, secret word;

let keys = store keyboard buttons in one variable;}

keys.onclick {
= const letter for each individual letter;

if (letter equals enter) {
trigger function to handle submitted word }

else (letter equals delete) {
trigger function to delete letter(s), starting from end of word }
}

update number of guessed words in separate function;

}

function handleSubmitWord {
convert inputted word to string via parseInt or join method;
link to separate function checkLetter to check each individual letter against correct word;
get the ID of each letter to iterate over submitted word;
}

function checkLetter {
check inputted letter against correct word using includes method;

if (!inputtedletter === correctWord) {
brown colour to signify no letter matches
};

return respective letter of each numeric point of correct word via charAt method and store in variable;

check inputted letter against variable;

if (inputted letter features in correct word) {
green colour to signify exact match};

else {
yellowish tinge to signify inputted letter is in correct word, 
but not at correct position}

    }

}
