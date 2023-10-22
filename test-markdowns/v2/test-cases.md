# Test Cases Text Ananlysis Module Version 2

## TC1: Counting characters from text

**Scenario:** 

Verify that the functions from `class CharacterCounter` correctly counts characters and words from a text; `countCharacters`, `countVowels`, `countConsonants`, `countOtherCharacters` and `countWords`.

**Expected Outcome:** 

The functions should return:
- The total count of characters from the text.
- The total count of vowels from the text.
- The total count of consonants from the text.
- The total count of other characters from the text.
- The total count of words from the text.

**Test Steps:**

1. Open the terminal.
2. Navigate to the project folder.
3. Run the command `npm run test-app`.
4. Verify that the functions passes the test.

**Input Data:**

- 'Hello! This is a simple text that is provided to test the functionality of this module. This text contains 152 characters, 31 words, 47 vowels, 88 consonants and 17 other characters.'

**Expected Results:**

- The functions should pass the test.
- Count characters: `152`
- Count vowels: `47`
- Count consonants: `88`
- Count other characters: `17`
- Count words: `31`

**Assertions:**
- The returned count should be a non-negative integer.

**Results:**

- The functions passed their tests.

## TC2: Displaying text content and characters

**Scenario:**

Verify that the functions from `class CharacterDisplayer` correctly displays the text content and characters; `showContent`, `showVowels`, `showConsonants`, `showOtherCharacters`.

**Expected Outcome:**

The functions should return:
- The content of the text.
- The vowels from the text.
- The consonants from the text.
- The other characters from the text.

**Test Steps:**

- Use test steps from TC1.

**Input Data:**

- 'Hello! This is a simple text that is provided to test the functionality of this module. This text contains 152 characters, 31 words, 47 vowels, 88 consonants and 17 other characters.'

**Expected Results:**

- The functions should pass their tests.

**Results:**

- The functions passed their tests.

## TC3: Displaying text statistics

**Scenario:**

Verify that the functions from `class CharacterStatistics` correctly displays the text statistics; `getTopCharacters`, `getTopVowels`, `getTopConsonants` and `getTopConsonants`.

**Expected Outcome:**

The functions should return:
- The top 5 characters from the text.
- The top 5 vowels from the text.
- The top 5 consonants from the text.
- The top 5 other characters from the text.

**Test Steps:**

- Use test steps from TC1.

**Input Data:**

- 'Hello! This is a simple text that is provided to test the functionality of this module. This text contains 152 characters, 31 words, 47 vowels, 88 consonants and 17 other characters.'

**Expected Results:**

- The functions should pass their tests.

**Results:**

- Not all functions passed their tests. 
- The `getTopOtherCharacters` function failed the test.

## TC4: Error handling

**Scenario:**

Verify that the functions from `class CharacterCounter`, `class CharacterDisplayer` and `class CharacterStatistics` correctly handles errors.

**Expected Outcome:**

The functions should return:
- An error message if the input is not a string.
- An error message if the input is an empty string.

**Test Steps:**

- Open the terminal.
- Navigate to the project folder.
- Run the command `npm run test-error`.

**Input Data:**

- '' (empty string)

**Expected Results:**

- The try-catch block should catch the error and return an error message from each class instance.

**Results:**

- The error messages were returned as expected.
- The error tests passed their tests.
