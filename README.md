# Lab 2 Module - Character Analysis Module

A JavaScript module for analyzing texts to count and display characters, vowels, consonants and retrieve character statistics. 

This module analysis a txt-file in some limited ways. What more could be analyzed in a txt-file? Maybe a future developement for the eager programmer to implement.

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
