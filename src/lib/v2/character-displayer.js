export class CharacterDisplayer {

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

      for (const character of this.text) {
        if (vowels.includes(character)) {
          vowelsFromText += character
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

      for (const character of this.text) {
        if (consonants.includes(character)) {
          consonantsFromText += character
        }
      }

      return consonantsFromText
    } catch {
      console.error('Error showing consonants: ' + error)
    }
  }

  showOtherCharacters() {
    try {
      const otherCharactersRegex = /[^\p{Alphabetic}\s]+/gu
      const otherCharactersFromText = this.text.match(otherCharactersRegex) || []
      return otherCharactersFromText.join('')
    } catch (error) {
      console.error('Error showing other characters: ' + error)
    }
  }

}
