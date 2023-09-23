import { countSignsInFile, countVowelsInFile, countConsonantsInFile, showVowelsFromFile } from '../index.js'

const filePath = 'input.txt'

const signCount = countSignsInFile(filePath)
const vowelsCount = countVowelsInFile(filePath)
const consonantsCount = countConsonantsInFile(filePath)

console.log(`Sign count: ${signCount}`)
console.log(`Vowels in file: ${vowelsCount}`)
console.log(`Consonants in file: ${consonantsCount}`)
console.log(`Vowels in file: ${showVowelsFromFile(filePath)}`)
