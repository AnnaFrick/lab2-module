/**
 *
 */
export class SignDisplayer {
  /**
   * @param text The text to analyze.
   */
  constructor(text) {
    if (typeof text !== 'string') {
      throw new TypeError('The text must be a valid string.')
    }
    this.text = text
  }

  showContent() {
    try {
      const textContent = this.text
      return textContent
    } catch (error) {
      console.error('Error showing content: ' + error)
    }
  }

  /**
   * A function that returns all vowels from a text.
   *
   */
  showVowels() {
    try {
      const vowels = 'aeiouyAEIOUY'
      let vowelsFromText = ''

      for (const sign of this.text) {
        if (vowels.includes(sign)) {
          vowelsFromText += sign
        }
      }
      return vowelsFromText
    } catch (error) {
      console.error('Error showing vowels: ' + error)
    }
  }

  /**
   * A function that returns all consonants from a text.
   */
  showConsonants() {
    try {
      const consonants = 'bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ'
      let consonantsFromText = ''

      for (const sign of this.text) {
        if (consonants.includes(sign)) {
          consonantsFromText += sign
        }
      }

      return consonantsFromText
    } catch {
      console.error('Error showing consonants: ' + error)
    }
  }
}
