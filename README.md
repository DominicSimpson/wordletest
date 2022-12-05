# Wordle Challenge Attempt

---

## Background

![screenshot(2)](https://user-images.githubusercontent.com/52511353/205694523-24380e50-d87d-46f6-8e64-19f6f970b0f1.png)

### Wordle is an online game in which the player is given six attempts to uncover a secret, correct word, which is usually five letters long (but may be longer or less in other interations). The screenshot above shows my own attempt at the *New York Times* version of the game, with one remaining chance to spare. The player wins if they guess the correct word, which in this case is 'woken'.

### The colour coding in the example above relates to the following:

- Grey: Inputted letter does not feature in correct word 
- Yellowish tinge: Inputted letter does feature in correct word, but not at the same position in word
- Green: Inputted letter features in correct word, and at the correct position in word

### For this take-home challenge, I am going to look solely at how the code behind Wordle assesses whether an inputted letter from a user exists in the correct, secret word, and if so, if it corresponds to the correct position or not. I will not be using an API, as the test only needs to be done once, so I do not need to generate new correct words each time. This is also why I am only employing one row of what I call 'lettersquares' (or boxes, or text boxes), rather than six, as in the professional *NYT* version.  

---

## The Code

###### I set up the lettersquares and keyboard in the HTML (I could've used the QWERTY system, as the *NYT* version does, but settled on an alphabetic keyboard). Each keyboard letter is stored in the same variable, `keys`, first of all. An iteration through the `key` variable gets the individual inputted letter, stored in the variable `letter`, plus discerns if the user has pressed Enter or Delete, both of which trigger appropriate functions. 

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

###### Meanwhile, I set the correct, secret word as 'raise', in a variable called 'correctWord'.

###### The function that is the most important here is the `generateLetterSquareColour` function. The `generateLetterSquareColour` function takes two parameters, the aforementioned letter and the index point of a letter. The `includes` method, which determines whether a given value includes a certain value among the value's elements, is used on the `correctWord` variable to test if that variable includes the letter parameter, and is converted to the variable `isCorrectLetter`, which now returns a Boolean (which the `includes` method is). If  isCorrectLetter as a Boolean returns false, that means that no matches are found between the inputted letter and the letters of the correct word; this then triggers the grey colour mentioned above via `return "rgb(58,58,60)"`. However, black text on grey is hard to read, so I had to set up a for loop on each value - each letter - that does not feature in the correct word, so as to iterate through each value and apply a white colour to the font. This turned out to be tricky, as the last letter in grey would not feature in white, so the way to do it was to set up an array called `finalWordArray`, which contains the values of each letter in a submitted word.    

###### Meanwhile, if the inputted letter *does* feature in the correct word, whether or not in the correct position in the correct word, the above is skipped, and the function instead takes the `correctWord` variable and returns the respective letter of each numeric point in the correct word (e.g. 'r' for 1, 'a' for 2, etc.) via the `charAt` method. The `charAt` method does this by taking the index point of each letter in the correct word as a parameter. This is then stored in a variable called `letterInPosition`. The letter parameter (the inputted letter) is then tested against this variable using strict equality, and if it is equal - that is, the inputted letter matches the correct letter in the correct position in the correct word - it's stored in a Boolean variable called `ifLetterFeaturesInCorrectWord`. If `ifLetterFeaturesInCorrectWord` returns true, the colour green is unleashed via `return "rgb(83,141,78)"`, denoting success. If `ifLetterFeaturesInCorrectWord' returns false, the yellowish tinge is unleashed via `return "rgb(181,159,59)"`, denoting that the inputted letter does feature in the correct word, but not in the correct position.  
---



| Variables                       | Description                                                                                 | Type                  |
| -------------                   |:-------------:                                                                              | -----:                |
| correctWord                     | The correct, secret word that users have to try and guess                                   | Variable              |
| keys                            | Stores each key (A-Z) in one variable                                                       | DOM Variable          |
| letter                          | Gets the individual inputted letter                                                         | DOM Variable          |
| guessedWords                    | Array containing array of guessed word                                                      | Variable              |
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
