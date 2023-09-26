import { readFileSync } from 'fs'

/**
 *
 */
export class SignDisplayer {
  /**
   *
   * @param filePath
   */
  constructor (filePath) {
    this.file = filePath
    this.fileContent = readFileSync(filePath, 'utf8')
  }

  /**
   * A function that returns all vowels in a file.
   *
   * @param {*} filePath A file that should be read.
   * @returns All vowels in the file.
   */
  showVowelsFromFile () {
    const vowels = 'aeiouyAEIOUY'
    let vowelsInFile = ''

    for (const sign of this.fileContent) {
      if (vowels.includes(sign)) {
        vowelsInFile += sign
      }
    }
    return vowelsInFile
  }

  /**
   * A function that returns all consonants in a file.
   *
   * @param {*} filePath A file that should be read.
   * @returns All vowels in the file.
   */
  showConsonantsFromFile () {
    const consonants = 'bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ'
    let consonantsInFile = ''

    for (const sign of this.fileContent) {
      if (consonants.includes(sign)) {
        consonantsInFile += sign
      }
    }

    return consonantsInFile
  }
}
