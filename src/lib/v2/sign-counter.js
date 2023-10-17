
export class SignCounter {
  /**
   *
   * @param text The text to analyze.
   */
  constructor(text) {
    if (typeof text !== 'string' || text === '') {
      throw new TypeError('The text must be a valid string.')
    }
    this.text = text.toLowerCase()
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
      const vowels = 'aeiouy'
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
      const consonants = 'bcdfghjklmnpqrstvwxz'
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

  countOtherSigns() {
    try {
      // Regular expression to match numbers and other signs (excluding alphabetic characters and spaces)
      const otherSignsRegex = /[^\p{Alphabetic}\s]+/gu
      let count = 0

      for (const sign of this.text) {
        if (sign.match(otherSignsRegex)) {
          count++
        }
      }
      return count
    } catch (error) {
      console.error('Error counting other signs: ' + error)
    }
  }  
}