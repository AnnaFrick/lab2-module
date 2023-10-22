# Test summary of The Character Analysis Module

## How to run the tests

To test the module, there are a few steps you need to do. Follow these following steps to set up a test-app.

- In the terminal, run the following command:

```npm install character-analysis-module```

- Create a `test-app` file in your directory and write the following code in it:

```javascript
import { CharacterCounter, CharacterDisplayer, CharacterStatistics } from 'character-analysis-module'

const textToAnalyze = 'This is a test text.'

const characterCounter = new CharacterCounter(textToAnalyze)
const characterDisplayer = new CharacterDisplayer(textToAnalyze)
const characterStatistics = new CharacterStatistics(textToAnalyze)

```

- Test through the different methods in the module by calling them in the `test-app` file. For example:
    
```javascript
characterCounter.countCharacters()
```

- In your package.json file, add the following to your scripts:

```javascript
"scripts": {
    "test": "node your-path-to/test-app.js"
  }
```

- Run the following command in the terminal:

```npm run test```

## Summary of test cases of module

| Method/function | How it's being tested | Test result |
| --------------- | --------------------- | ----------  |
| TC1: `CharacterCounter` | Tested with input data and expected outcome. | 5/5 PASSED |
| TC2: `CharacterDisplayer` | Tested with input data and expected outcome.  | 4/4 PASSED |
| TC3: `CharacterStatistics` | Tested with input data and expected outcome.  | 3/4 PASSED  |
| TC4: Error Handling | Tested with input data and expected outcome. | 3/3 PASSED |

- Total test cases executed: 16
- Passed: 15
- Failed: 1

## Conclusion

In version 2, this module has been updated with a new approach of handling input from the user. The module now takes in a string as input instead of a file path. This makes the module more flexible and easier to use. The module has also been updated with a new methods that handles other characters than letters and also a method that counts the amount of words in a text. There are more methods that can be added to the module, for example a method that counts the amount of sentences or gets statistics of the amount of words in a text. 

Also there are a method that needs to be fixed, the `getTopOtherCharacters` method from TC3. This method is supposed to return the most common other characters in a text, but it doesn't work as it should. This method needs to be fixed in the next version of the module.

## Recommendations

- The `getTopOtherCharacters` method needs to be fixed.