# Lab 2 Module - Sign Analysis Module
Laboration 2. Making a module.

A JavaScript module for analyzing text files to count and display signs, vowels, consonants and retrieve sign statistics.

## Installation

You can install this module using npm:

```bash
npm install sign-analysis-module
```

## Usage

```javascript
import { SignCounter, SignDisplayer, SignStatistics } from 'sign-analysis-module'

const filePath = 'path-to-file.txt' // Use absolute path

const signCounter = new SignCounter(filePath)
const signDisplayer = new SignDisplayer(filePath)
const signStatistics = new SignStatistics(filePath)

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
