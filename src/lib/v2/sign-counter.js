/**
 * A module that handles a text and count its content.
 */

export class SignCounter {
  /**
   *
   * @param text The text to analyze.
   */
  constructor (text) {
    this.text = text
  }

  /**
   * Counts all signs in a file.
   *
   * @returns The amount of signs in the file.
   */
  countSigns () {
    // Counting signs and replacing blank spaces with empty string
    const signsInText = this.text.replace(/\s/g, '')
    const signCount = signsInText.length
    return signCount
  }

  /**
   * Counts all vowels in a file.
   *
   * @returns The amount of vowels in the file.
   */
  countVowels () {
    const vowels = 'aeiouyAEIOUY'
    let count = 0

    for (const sign of this.text) {
      if (vowels.includes(sign)) {
        count++
      }
    }
    return count
  }

  /**
   * Counts all consonants in a file.
   *
   * @returns The amount of consonants in the file.
   */
  countConsonants () {
    const consonants = 'bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ'
    let count = 0

    for (const sign of this.text) {
      if (consonants.includes(sign)) {
        count++
      }
    }
    return count
  }
}
