# Test summary of module

## How to run the tests
To test the module, there are a few steps you need to do. Follow these following steps to set up a test-app.

- In the terminal, run the following command:

```npm install npm-package```
- Create a `test.txt` in your directory and write some text in it.
- Create a `app-test.js` file in your directory and write the following code in it:

```javascript

import { SignCounter, SignDisplayer, SignStatistics } from 'npm-package'

const filePath = 'test.txt'

const signCounter = new SignCounter(filePath)
const signDisplayer = new SignDisplayer(filePath)
const signStatistics = new SignStatistics(filePath)

```

- Test through the different methods in the module by calling them in the `app-test.js` file. For example:
    
    ```javascript
    signCounter.countSignsInFile()
    ```
- In your package.json file, add the following to your scripts:

```javascript
"scripts": {
    "test": "node your-path-to/app-test.js"
  }
```

- Run the following command in the terminal:

```npm test```

## Summary of test cases of module

| Method/function | How it's being tested | Test result |
| --------------- | --------------------- | ----------  |
| TC1: `countSignsInFile` | Manually with data input. | PASSED   |
| TC2: `countVowelsInFile` | Manually with data input. | PASSED |
| TC3: `countConsonantsInFile` | Manually with data input. |  PASSED  |
| TC4: `showVowelsFromFile` | Manually with data input . | PASSED |
| TC5: `showConsonantsFromFile` | Manually with data input. |  PASSED |
| TC6: `getTopSigns` | Manually with data input. | FAILED |
| TC7: `getTopVowels` | Manually with data input. | PASSED |
| TC8: `getTopConsonants` | Manually with data input. | FAILED  |
| TC9: `showContentFromFile` | Manually with data input. | PASSED  |



- Total test cases executed: 9
- Passed: 7
- Failed: 2

## Conclusions

The Sign Counter module performs well in most cases, but there is two failing tests that needs attention. When getting the top signs and top consonants, the module does not return the expected results. The issue is probably that the methods includes white spaces and doesn't count lower and upper cases together. This needs to be fixed for the module to work as expected.

## Recommendations

- Investigate and fix the issue in Test Case 6 and Test Case 8.

