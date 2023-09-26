/**
 * A module that handles a file and its content.
 */
import { readFileSync } from 'fs'

/**
 *
 */
export class SignCounter {
  /**
   *
   * @param filePath
   */
  constructor (filePath) {
    this.filePath = filePath
    this.fileContent = readFileSync(filePath, 'utf8')
  }

  /**
   * Counts all signs in a file.
   *
   * @param {*} \ A file that should be read.
   * @param filePath
   * @returns The amount of signs in the file.
   */
  countSignsInFile () {
    // Counting signs and replacing blank spaces with empty string
    const nonWhitespaceFileContent = this.fileContent.replace(/\s/g, '')
    const signCount = nonWhitespaceFileContent.length
    return signCount
  }

  /**
   * Counts all vowels in a file.
   *
   * @param {*} filePath A file that should be read.
   * @returns The amount of vowels in the file.
   */
  countVowelsInFile () {
    const vowels = 'aeiouyAEIOUY'
    let count = 0

    for (const sign of this.fileContent) {
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
  countConsonantsInFile () {
    const consonants = 'bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ'
    let count = 0

    for (const sign of this.fileContent) {
      if (consonants.includes(sign)) {
        count++
      }
    }
    return count
  }
}
