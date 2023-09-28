# Lab 2 Module - Sign Analysis Module

A JavaScript module for analyzing text files to count and display signs, vowels, consonants and retrieve sign statistics. 

This module analysis a txt-file in some limited ways. What more could be analyzed in a txt-file? Maybe a future developement for the eager programmer to implement.

## Installation

You can install this module using npm:

```bash
npm install sign-analysis-module
```

## Usage

The module contains three classes: `SignCounter`, `SignDisplayer` and `SignStatistics`. Each class contains methods for analyzing text files. 

To use the module and its methods, you need to create a txt file and provide the path to the file as an argument to the constructor of the class.

Example usage of the module:

```javascript
import { SignCounter, SignDisplayer, SignStatistics } from 'sign-analysis-module'

const filePath = 'path-to-file.txt' // Use absolute path

const signCounter = new SignCounter(filePath)
const signDisplayer = new SignDisplayer(filePath)
const signStatistics = new SignStatistics(filePath)

console.log(signCounter.countSignsInFile())
console.log(signDisplayer.showContentFromFile())
console.log(signStatistics.getTopVowels())

```

## References

**SignCounter**
- `countSignsInFile()`: Counts all signs in the file.
- `countVowelsInFile()`: Counts all vowels in the file.
- `countConsonantsInFile()`: Counts all consonants in the file.

**SignDisplayer**
- `showContentFromFile()`: Returns all signs (the whole content) in the file.
- `showVowelsFromFile()`: Returns all vowels in the file.
- `showConsonantsFromFile()`: Returns all consonants in the file.

**SignStatistics**
- `getTopSigns()`: Retrieves the top five signs in the file.
- `getTopVowels()`: Retrieves the top five vowels in the file.
- `getTopConsonants()`: Retrieves the top five consonants in the file.
