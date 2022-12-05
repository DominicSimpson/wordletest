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

I set up the lettersquares and keyboard in the HTML (I could've used the QWERTY system, as the *NYT* version does, but settled on an alphabetic keyboard). Each keyboard letter is stored in the same variable, keys, first of all. An iteration through the 

---



| Variables                       | Description                                                                     | Type                  |
| -------------                   |:-------------:                                                                  | -----:                |
| correctWord                     | The correct, secret word that users have to try and guess                       | Variable              |
| keys                            | Stores each key (A-Z) in one variable                                           | DOM Variable          |
| letter                          | Gets the individual inputted letter                                             | DOM Variable          |
| guessedWords                    | Array containing array of guessed word                                          | Variable              |
| availableSpace                  | Number of letters available in each attempt at a guess                          | Variable              |
| guessedWordCount                | Increments to one at end of this test (initialized to zero)                     | Variable              |
| numberOfGuessedWords            | Stores number of guessed words in variable                                      | Variable              |
| ifLetterFeaturesInCorrectWord   | If letter features in correct word, whether in correct position or not          | Variable              |
| isCorrectLetter                 | Checks if correct word features inputted letter                                 | Variable              |
| letterInPosition                | Returns the respective letter of each numeric point in the correct word         | Variable              |
| currentWordArr                  | Arry containing current attempt at guessing the correct word                    | Variable              |
| currentWord                     | Five letter string of current attempt at guessing the correct word              | Variable              |
| firstLetterId                   | First letter ID in attempt at guessing word                                     | Variable              |
| lastLetter                      | Gets last letter so as to enable Delete letter function                         | DOM Variable          |
| emptyLetterSquare               | Corresponds to each available lettersquare / box                                | DOM Variable          |
| interval                        | setTimeout interval time for colour effect on letters after user presses enter  | DOM Variable          |
