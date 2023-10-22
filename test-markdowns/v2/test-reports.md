# Test Reports for the Character Analysis Module

 - In the `test-app.js` the functionality of this module is tested as follows:

 ```javascript
import { CharacterCounter } from "../lib/index.js"
import { CharacterDisplayer } from "../lib/index.js"
import { CharacterStatistics } from "../lib/index.js"

const text = 'Hello! This is a simple text that is provided to test the functionality of this module. This text contains 152 characters, 31 words, 47 vowels, 88 consonants and 17 other characters.'

function test(description, actual, expected) {
    if (actual === expected) {
      console.log(`Test for ${description} passed.`)
    } else {
      console.error(`Test for ${description} failed. Expected ${expected}, but got ${actual}.`)
    }
}

const counter = new CharacterCounter(text)
console.log('-------Testing CharacterCounter class-------')
test('countCharacters', counter.countCharacters(), 152);
test('countVowels', counter.countVowels(), 47);
test('countConsonants', counter.countConsonants(), 88);
test('countOtherCharacters', counter.countOtherCharacters(), 17);
test('countWords', counter.countWords(), 31);
console.log('')

const displayer = new CharacterDisplayer(text)
console.log('-------Testing CharacterDisplayer class-------')
test('showContent', displayer.showContent(), text);
test('showVowels', displayer.showVowels(), 'eoiiaieeaioieoeeuioaiyoioueieoaiaaeooeooaaoeaae')
test('showConsonants', displayer.showConsonants(), 'HllThsssmpltxtthtsprvddttstthfnctnltfthsmdlThstxtcntnschrctrswrdsvwlscnsnntsndthrchrctrs')
test('showOtherCharacters', displayer.showOtherCharacters(), '!.152,31,47,8817.')
console.log('')


const stats = new CharacterStatistics(text)
console.log('-------Testing CharacterStatistics class-------')
test('getTopCharacters', Object.keys(stats.getTopCharacters()).toString(), Object.keys({ t: 20, s: 14, e: 12, o: 12, i: 10 }).toString())
test('getTopVowels', Object.keys(stats.getTopVowels()).toString(), Object.keys({ e: 12, o: 12, i: 10, a: 10, u: 2 }).toString())
test('getTopConsonants', Object.keys(stats.getTopConsonants()).toString(), Object.keys({ t: 20, s: 14, h: 9, n: 8, r: 7 }).toString())
test('getTopOtherCharacters', Object.keys(stats.getTopOtherCharacters()).toString(), Object.keys({ '1': 3, ',': 3, '.':2, '8':2, '7':2 }).toString())
```

## Report for TC1

**Results**

```
-------Testing CharacterCounter class-------
Test for countCharacters passed.
Test for countVowels passed.
Test for countConsonants passed.
Test for countOtherCharacters passed.
Test for countWords passed.
```

**Status**

All tests for the `CharacterCounter` class passed.

**Test Date and Author**

- Test date: 2023-10-22
- Author: Anna Engström Frick


## Report for TC2

**Results**

```
-------Testing CharacterDisplayer class-------
Test for showContent passed.
Test for showVowels passed.
Test for showConsonants passed.
Test for showOtherCharacters passed.
```

**Status**

All tests for the `CharacterDisplayer` class passed.

**Test Date and Author**

- Test date: 2023-10-22
- Author: Anna Engström Frick


## Report for TC3

**Results**

```
-------Testing CharacterStatistics class-------
Test for getTopCharacters passed.
Test for getTopVowels passed.
Test for getTopConsonants passed.
Test for getTopOtherCharacters failed. Expected 1,7,8,,,., but got 1,2,3,,,..
```

**Status**

Three tests for the `CharacterStatistics` class passed, but one failed.

**Test Date and Author**

- Test date: 2023-10-22
- Author: Anna Engström Frick

## Report for TC4

**Results**

```

> character-analysis-module@2.1.0 test-error
> node ./src/test/test-error.js

-------Testing CharacterCounter class (Error Handling)-------
Failed to create an instance of CharacterCounter: TypeError: The text must be a valid string.

-------Testing CharacterDisplayer class (Error Handling)-------
Failed to create an instance of CharacterDisplayer: TypeError: The text must be a valid string.

-------Testing CharacterStatistics class (Error Handling)-------
Failed to create an instance of CharacterStatistics: TypeError: The text must be a valid string.

```

**Status**

All tests for Error Handling passed.

**Test Date and Author**

- Test date: 2023-10-22
- Author: Anna Engström Frick
