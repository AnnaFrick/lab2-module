import { readFileSync } from 'fs'

/**
 *
 */
export class SignDisplayer {
  /**
   * @param filePath The path to the file to analyze.
   */
  constructor (filePath) {
    this.file = filePath
    this.fileContent = readFileSync(filePath, 'utf8')
  }

  showContentFromFile () {
    const fileContent = this.fileContent
    return fileContent
  }

  /**
   * A function that returns all vowels in a file.
   *
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
