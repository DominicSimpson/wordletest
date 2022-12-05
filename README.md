# wordletest

#### I am going to look at the letters that do exist in the correct five-letter word, but are not in the correct order of the correct word. For example, the 'd' in 'Coders' could be uncovered, but not necessarily as the third letter in the word.

| Variables                       | Description                                                               | Type                  |
| -------------                   |:-------------:                                                            | -----:                |
| correctWord                     | The correct word that users have to try and guess                         | Variable              |
| keys                            | Stores each key (A-Z) in one variable                                     | DOM Variable          |
| guessedWords                    | Array containing array of guessed word                                    | Variable              |
| availableSpace                  | Number of letters available in each attempt at a guess                    | Variable              |
| guessedWordCount                | Increments to one at end of this test (initialized to zero)               | Variable              |
| isCorrectLetter                 | Checks if correct word features inputted letter                           | Variable              |
| letterInPosition                | Returns the respective letter of each numeric point in the correct word   | Variable
