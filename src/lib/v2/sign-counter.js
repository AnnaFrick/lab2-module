/**
 * A module that handles a text and count its content.
 */

export class SignCounter {
  /**
   *
   * @param text The text to analyze.
   */
  constructor(text) {
    if (typeof text !== 'string') {
      throw new TypeError('The text must be a valid string.')
    }
    this.text = text
  }

  /**
   * Counts all signs in a file.
   *
   * @returns The amount of signs in the file.
   */
  countSigns() {
    // Counting signs and replacing blank spaces with empty string
    try {
      const signsInText = this.text.replace(/\s/g, '')
      const signCount = signsInText.length
      return signCount
    } catch (error) {
      console.error("Error counting signs: " + error)
    }
  }

  /**
   * Counts all vowels in a file.
   *
   * @returns The amount of vowels in the file.
   */
  countVowels() {
    try {
      const vowels = 'aeiouyAEIOUY'
      let count = 0

      for (const sign of this.text) {
        if (vowels.includes(sign)) {
          count++
        }
      }
      return count
    } catch (error) {
      console.error("Error counting vowels: " + error)
    }
  }

  /**
   * Counts all consonants in a file.
   *
   * @returns The amount of consonants in the file.
   */
  countConsonants() {
    try {
      const consonants = 'bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ'
      let count = 0

      for (const sign of this.text) {
        if (consonants.includes(sign)) {
          count++
        }
      }
      return count
    } catch (error) {
      console.error("Error counting consonants: " + error)
    }
  }
}