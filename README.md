# Lab 2 Module - Character Analysis Module

The Character Analysis Module is a JavaScript module for analyzing texts. With help from this module you can count and display characters, vowels, consonants and retrieve character statistics. 

**Some clarifications:**
- Characters are all the characters in the text, excluding spaces, punctuation marks and so on. 
- Vowels are the letters a, e, i, o, u and y (excluding the swedish vocabulary). 
- Consonants are all letters except the vowels. 
- Other characters are all characters that are not letters like numbers, punctuation marks and so on (spaces are not included).
- Character statistics shows the top five characters, vowels and consonants from the text. 

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

const filePath = 'path-to-file.txt' // Use absolute path

const characterCounter = new CharacterCounter(filePath)
const characterDisplayer = new CharacterDisplayer(filePath)
const characterStatistics = new CharacterStatistics(filePath)

console.log(characterCounter.countcharactersInFile())
console.log(characterDisplayer.showContentFromFile())
console.log(characterStatistics.getTopVowels())

```

## References

**characterCounter**
- `countcharactersInFile()`: Counts all characters in the file.
- `countVowelsInFile()`: Counts all vowels in the file.
- `countConsonantsInFile()`: Counts all consonants in the file.

**characterDisplayer**
- `showContentFromFile()`: Returns all characters (the whole content) in the file.
- `showVowelsFromFile()`: Returns all vowels in the file.
- `showConsonantsFromFile()`: Returns all consonants in the file.

**characterStatistics**
- `getTopcharacters()`: Retrieves the top five characters in the file.
- `getTopVowels()`: Retrieves the top five vowels in the file.
- `getTopConsonants()`: Retrieves the top five consonants in the file.
