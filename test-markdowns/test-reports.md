# Test Report of module

When testing the module and its functions, a file was created with the name `app-test.js` and the following content:

```javascript
import { SignCounter } from "../index.js"
import { SignDisplayer } from "../index.js"
import { SignStatistics } from "../index.js"

const filePath = 'test.txt'

const counter = new SignCounter(filePath)
console.log('Count of Signs in File: ', counter.countSignsInFile())
console.log('Count of Vowels in File: ', counter.countVowelsInFile())
console.log('Count of Consonants in File: ', counter.countConsonantsInFile())

const displayer = new SignDisplayer(filePath)
console.log('Vowels in File: ', displayer.showVowelsFromFile())
console.log('Consonants in File: ', displayer.showConsonantsFromFile())

const stats = new SignStatistics(filePath)
console.log('Top 5 signs that are used in file: ', stats.getTopSigns())
console.log('Top 5 vowels in file: ', stats.getTopVowels())
console.log('Top 5 consonants in file: ', stats.getTopConsonants())
```

Each function was tested manually with data input. The test results are as below.

## Test report for TC1

**Results**

The results of the test are as follows:
`37`

**Status**

The test passed.

**Comments**

![TC1 Output](../img/TC1.2.png)

**Test Date and Author**

- Test Date: September 25, 2023
- Author: Anna Engström Frick

## Test report for TC2

**Results**

The results of the test are as follows:
`13`

**Status**

The test passed.

**Comments**

![TC2 Output](../img/TC2.png)

**Test Date and Author**

- Test Date: September 25, 2023
- Author: Anna Engström Frick

## Test report for TC3

**Results**

The results of the test are as follows:
`22`

**Status**

The test passed.

**Comments**

![TC3 Output](../img/TC3.png)

**Test Date and Author**

- Test Date: September 25, 2023
- Author: Anna Engström Frick

## Test report for TC4

**Results**

The results of the test are as follows:
`iiaeieeeeoiou`

**Status**

The test passed.

**Comments**

![TC4 Output](../img/TC4.png)

**Test Date and Author**

- Test Date: September 25, 2023
- Author: Anna Engström Frick

## Test report for TC5

**Results**

The results of the test are as follows:
`ThsststflLtsshwthscnts`

**Status**

The test passed.

**Comments**

The expected output was only with lower case letters while the results was mixed with in lower and upper case letters.

![TC5 Output](../img/TC5.png)

**Test Date and Author**

- Test Date: September 25, 2023
- Author: Anna Engström Frick

## Test report for TC6

**Results**

The results of the test are as follows:
`{ ' ': 9, s: 7, t: 5, e: 5, i: 4 }`

**Status**

The test failed.

**Comments**

The expected output did not include the space sign. The space sign was included in the results. The results was in an object while the expected output wasn't.

![TC6 Output](../img/TC6.png)

**Test Date and Author**

- Test Date: September 25, 2023
- Author: Anna Engström Frick

## Test report for TC7

**Results**

The results of the test are as follows:
` [ [ 'e', 5 ], [ 'i', 4 ], [ 'o', 2 ], [ 'a', 1 ], [ 'u', 1 ] ]`

**Status**
The test passed.

**Comments**

The results was in an array of arrays while the expected output wasn't. But the order of the top five vowels was correct.

![TC7 Output](../img/TC7.png)

**Test Date and Author**

- Test Date: September 25, 2023
- Author: Anna Engström Frick

## Test report for TC8

**Results**

The results of the test are as follows:
`[ [ 's', 7 ], [ 't', 5 ], [ 'h', 3 ], [ 'T', 1 ], [ 'f', 1 ] ]`

**Status**

The test failed.

**Comments**

The results didn't match the expected output. The lower case and upper case of the letter `t` was not counted together. The results was in an array of arrays while the expected output wasn't.

![TC8 Output](../img/TC8.png)

**Test Date and Author**

- Test Date: September 25, 2023
- Author: Anna Engström Frick
