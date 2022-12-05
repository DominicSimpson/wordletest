# wordletest

#### I am going to look at the letters that do exist in the correct five-letter word, but are not in the correct order of the correct word. For example, the 'd' in 'Coders' could be uncovered, but not necessarily as the third letter in the word.

| Variables                       | Description                                                                     | Type                  |
| -------------                   |:-------------:                                                                  | -----:                |
| correctWord                     | The correct word that users have to try and guess                               | Variable              |
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
