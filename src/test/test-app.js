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

