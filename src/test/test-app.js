import { SignCounter } from "../lib/index.js"
import { SignDisplayer } from "../lib/index.js"
import { SignStatistics } from "../lib/index.js"

const text = 'Hejsan, detta är en text som ska testas! 1234874368746583746583567890'

const counter = new SignCounter(text)
console.log('Count of signs from text: ', counter.countSigns())
console.log('Count of vowels from text: ', counter.countVowels())
console.log('Count of consonants from text: ', counter.countConsonants())
console.log("Count of other signs from text: ", counter.countOtherSigns())

const displayer = new SignDisplayer(text)
console.log('Text content: ', displayer.showContent())
console.log('Vowels in text: ', displayer.showVowels())
console.log('Consonants in text: ', displayer.showConsonants())
console.log('Other signs in text: ', displayer.showOtherSigns())

const stats = new SignStatistics(text)
console.log('Top 5 signs that are used in the text: ', stats.getTopSigns())
console.log('Top 5 vowels in text: ', stats.getTopVowels())
console.log('Top 5 consonants in text: ', stats.getTopConsonants())
console.log('Top 5 other signs in text: ', stats.getTopOtherSigns())

