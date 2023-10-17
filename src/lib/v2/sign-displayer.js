
export class SignDisplayer {
  /**
   * @param text The text to analyze.
   */
  constructor(text) {
    if (typeof text !== 'string' || text === '') {
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

  showOtherSigns() {
    try {
      const otherSignsRegex = /[^\p{Alphabetic}\s]+/gu
      const otherSignsFromText = this.text.match(otherSignsRegex) || []
      return otherSignsFromText.join('') // Convert the matched characters to a single string
    } catch (error) {
      console.error('Error showing other signs: ' + error)
    }
  }
  
}
