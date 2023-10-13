/**
 *
 */
export class SignDisplayer {
  /**
   * @param text The text to analyze.
   */
  constructor (text) {
    this.text = text
  }

  showContent () {
    const textContent = this.text
    return textContent
  }

  /**
   * A function that returns all vowels from a text.
   *
   */
  showVowels () {
    const vowels = 'aeiouyAEIOUY'
    let vowelsFromText = ''

    for (const sign of this.text) {
      if (vowels.includes(sign)) {
        vowelsFromText += sign
      }
    }
    return vowelsFromText
  }

  /**
   * A function that returns all consonants from a text.
   */
  showConsonants () {
    const consonants = 'bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ'
    let consonantsFromText = ''

    for (const sign of this.text) {
      if (consonants.includes(sign)) {
        consonantsFromText += sign
      }
    }

    return consonantsFromText
  }
}
