/**
 * A module that handles a file and its content.
 */
import { readFileSync as readFile } from 'fs'

/**
 * Counts all signs in a file.
 *
 * @param {*} filePath A file that should be read.
 * @returns The amount of signs in the file.
 */
function countSignsInFile (filePath) {
  const fileContent = readFile(filePath, 'utf8')

  // Counting signs and replacing blank spaces with empty string
  const nonWhitespaceFileContent = fileContent.replace(/\s/g, '')
  const signCount = nonWhitespaceFileContent.length
  return signCount
}

/**
 * Counts all vowels in a file.
 *
 * @param {*} filePath A file that should be read.
 * @returns The amount of vowels in the file.
 */
function countVowelsInFile (filePath) {
  const vowels = 'aeiouyAEIOUY'
  let count = 0

  const fileContent = readFile(filePath, 'utf8')
  for (const sign of fileContent) {
    if (vowels.includes(sign)) {
      count++
    }
  }
  return count
}

/**
 * Counts all consonants in a file.
 *
 * @param {*} filePath A file that should be read.
 * @returns The amount of consonants in the file.
 */
function countConsonantsInFile (filePath) {
  const consonants = 'bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ'
  let count = 0

  const fileContent = readFile(filePath, 'utf8')
  for (const sign of fileContent) {
    if (consonants.includes(sign)) {
      count++
    }
  }
  return count
}

/**
 * A function that returns all vowels in a file.
 *
 * @param {*} filePath A file that should be read.
 * @returns All vowels in the file.
 */
function showVowelsFromFile (filePath) {
  const vowels = 'aeiouyAEIOUY'

  const fileContent = readFile(filePath, 'utf8')
  let vowelsInFile = ''
  for (const sign of fileContent) {
    if (vowels.includes(sign)) {
      vowelsInFile += sign
    }
  }
  return vowelsInFile
}

function showConsonantsFromFile (filePath) {
  const consonants = 'bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ'

  const fileContent = readFile(filePath, 'utf8')
  let consonantsInFile = ''
  for (const sign of fileContent) {
    if (consonants.includes(sign)) {
      consonantsInFile += sign
    }
  }
  return vowelsInFile
}

function countNumbersInFile (filePath) {
  const numbers = Number
  let count = 0

  const fileContent = readFile(filePath, 'utf8')
  for (const sign of fileContent) {
    if (numbers.includes(sign)) {
      count++
    }
  }
  return count
}

export {
  countSignsInFile,
  countVowelsInFile,
  countConsonantsInFile,
  showVowelsFromFile,
  showConsonantsFromFile
}
