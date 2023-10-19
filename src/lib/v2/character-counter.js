
export class CharacterCounter {
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

  countCharacters() {
    // Counting characters and replacing blank spaces with empty string
    try {
      const charactersInText = this.text.replace(/\s/g, '')
      const characterCount = charactersInText.length
      return characterCount
    } catch (error) {
      console.error("Error counting characters: " + error)
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

      for (const character of this.text) {
        if (vowels.includes(character)) {
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

      for (const character of this.text) {
        if (consonants.includes(character)) {
          count++
        }
      }
      return count
    } catch (error) {
      console.error("Error counting consonants: " + error)
    }
  }

  countOtherCharacters() {
    try {
      // Regular expression to match numbers and other characters (excluding alphabetic characters and spaces)
      const otherCharactersRegex = /[^\p{Alphabetic}\s]+/gu
      let count = 0

      for (const character of this.text) {
        if (character.match(otherCharactersRegex)) {
          count++
        }
      }
      return count
    } catch (error) {
      console.error('Error counting other characters: ' + error)
    }
  }

  countWords() {
    try {
      const words = this.text.split(/\s+/)
      return words.length
    } catch (error) {
      console.error('Error counting words: ' + error)
    }
  }
}