# Lab 2 Module - Character Analysis Module

The Character Analysis Module is a JavaScript module for analyzing texts. With help from this module you can count and display characters, vowels, consonants and retrieve character statistics. 

**Some clarifications:**
- Characters are all the characters in the text, excluding spaces, punctuation marks and so on. 
- Vowels are the letters a, e, i, o, u and y (excluding the swedish vocabulary). 
- Consonants are all letters except the vowels. 
- Other characters are all characters that are not letters like numbers, punctuation marks and so on (spaces are not included).
- Character statistics shows the top five characters, vowels and consonants from the text.
- Words are counted as a sequence of characters separated by spaces.

This module analysis a text as a string in the earlier mentioned ways. What more could be analyzed from a text? Maybe a future developement for the eager programmer to implement in this module.

## Installation

You can install this module using npm:

```bash
npm install character-analysis-module
```

## Usage

The module contains three classes: `CharacterCounter`, `CharacterDisplayer` and `CharacterStatistics`. Each class contains methods for analyzing text files. 

To use the module and its methods, you need to create a txt file and provide the path to the file as an argument to the constructor of the class.

Example usage of the module:

```javascript
import { CharacterCounter, CharacterDisplayer, CharacterStatistics } from 'character-analysis-module'

const textToAnalyze = 'Type/insert the text you would like to analyze here!' // Use absolute path

const characterCounter = new CharacterCounter(textToAnalyze)
const characterDisplayer = new CharacterDisplayer(textToAnalyze)
const characterStatistics = new CharacterStatistics(textToAnalyze)

console.log(characterCounter.countcharactersInFile())
console.log(characterDisplayer.showContentFromFile())
console.log(characterStatistics.getTopVowels())

```

## References

**characterCounter**
- `countCharacters()`: Counts all characters from the text.
- `countVowels()`: Counts all vowels from the text.
- `countConsonants()`: Counts all consonants from the text.
- `countOtherCharacters()`: Counts all other characters from the text.
- `countWords()`: Counts all words from the text.

**characterDisplayer**
- `showContent()`: Returns all characters (the whole content) from the text.
- `showVowels()`: Returns all vowels from the text.
- `showConsonants()`: Returns all consonants from the text.
- `showOtherCharacters()`: Returns all other characters from the text.

**characterStatistics**
- `getTopCharacters()`: Retrieves the top five characters from the text.
- `getTopVowels()`: Retrieves the top five vowels from the text.
- `getTopConsonants()`: Retrieves the top five consonants from the text.
- `getTopOtherCharacters()`: Retrieves the top five other characters from the text.
