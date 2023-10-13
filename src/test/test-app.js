import { SignCounter } from "../lib/index.js"
import { SignDisplayer } from "../lib/index.js"
import { SignStatistics } from "../lib/index.js"

const text = 'Hej jag heter Anna och nu testar jag min modul. Det här är en sträng som jag skickar in i min modul.'

const counter = new SignCounter(text)
console.log('Count of Signs in File: ', counter.countSigns())
console.log('Count of Vowels in File: ', counter.countVowels())
console.log('Count of Consonants in File: ', counter.countConsonants())

const displayer = new SignDisplayer(text)
console.log('File content: ', displayer.showContent())
console.log('Vowels in File: ', displayer.showVowels())
console.log('Consonants in File: ', displayer.showConsonants())

const stats = new SignStatistics(text)
console.log('Top 5 signs that are used in file: ', stats.getTopSigns())
console.log('Top 5 vowels in file: ', stats.getTopVowels())
console.log('Top 5 consonants in file: ', stats.getTopConsonants())

