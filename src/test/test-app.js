import { CharacterCounter } from "../lib/index.js"
import { CharacterDisplayer } from "../lib/index.js"
import { CharacterStatistics } from "../lib/index.js"

const text = 'Hejsan, detta är en text som ska testas!'

const counter = new CharacterCounter(text)
console.log('Counted characters from text: ', counter.countCharacters())
console.log('Counted vowels from text: ', counter.countVowels())
console.log('Counted consonants from text: ', counter.countConsonants())
console.log("Count of other characters from text: ", counter.countOtherCharacters())
console.log("Counted words from text: " + counter.countWords())

const displayer = new CharacterDisplayer(text)
console.log('Text content: ', displayer.showContent())
console.log('Vowels in text: ', displayer.showVowels())
console.log('Consonants in text: ', displayer.showConsonants())
console.log('Other characters in text: ', displayer.showOtherCharacters())

const stats = new CharacterStatistics(text)
console.log(stats.getTopCharacters())
console.log(stats.getTopVowels())
console.log(stats.getTopConsonants())
console.log(stats.getTopOtherCharacters())

