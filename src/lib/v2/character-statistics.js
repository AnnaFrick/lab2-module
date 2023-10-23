// The class is used to get the top 5 characters of each category.
export class CharacterStatistics {

  constructor(text) {
    if (typeof text !== 'string' || text === '') {
      throw new TypeError('The text must be a valid string.')
    }
    this.text = text.toLowerCase()
  }

  getTopCharacters() {
    try {
      const characterCounts = {}
      const charactersInText = this.text.replace(/\s/g, '')

      for (const character of charactersInText) {
        if (characterCounts[character]) {
          characterCounts[character]++
        } else {
          characterCounts[character] = 1
        }
      }

      const sortedCharacters = Object.entries(characterCounts).sort((a, b) => b[1] - a[1])
      const topCharacters = {}
      for (const [character, count] of sortedCharacters.slice(0, 5)) {
        topCharacters[character] = count
      }

      return topCharacters
    } catch (error) {
      console.error('Error getting top characters: ' + error)
    }
  }

  getTopVowels() {
    try {
      const vowels = 'aeiouy'
      const vowelCounts = {}

      for (const character of this.text) {
        if (vowels.includes(character)) {
          if (vowelCounts[character]) {
            vowelCounts[character]++
          } else {
            vowelCounts[character] = 1
          }
        }
      }

      const sortedVowels = Object.entries(vowelCounts).sort((a, b) => b[1] - a[1])
      const topVowels = {}
      for (const [character, count] of sortedVowels.slice(0, 5)) {
        topVowels[character] = count
      }

      return topVowels
    } catch (error) {
      console.error('Error getting top vowels: ' + error)
    }
  }

  getTopConsonants() {
    try {
      const consonants = 'bcdfghjklmnpqrstvwxz'
      const consonantCounts = {}

      for (const character of this.text) {
        if (consonants.includes(character)) {
          if (consonantCounts[character]) {
            consonantCounts[character]++
          } else {
            consonantCounts[character] = 1
          }
        }
      }

      const sortedConsonants = Object.entries(consonantCounts).sort((a, b) => b[1] - a[1])
      const topConsonants = {}
      for (const [character, count] of sortedConsonants.slice(0, 5)) {
        topConsonants[character] = count
      }
      return topConsonants
    } catch (error) {
      console.error('Error getting top consonants: ' + error)
    }
  }

  getTopOtherCharacters() {
    // The top 5 characters that are not letters
    try {
      const otherCharactersRegex = /[^\p{Alphabetic}\s]+/gu
      const otherCharactersCounts = {}

      for (const character of this.text) {
        if (otherCharactersRegex.test(character)) {
          if (otherCharactersCounts[character]) {
            otherCharactersCounts[character]++
          } else {
            otherCharactersCounts[character] = 1
          }
        }
      }

      const sortedOtherCharacters = Object.entries(otherCharactersCounts).sort((a, b) => {
        const aCharacter = isNaN(Number(a[0])) ? a[0] : Number(a[0])
        const bCharacter = isNaN(Number(b[0])) ? b[0] : Number(b[0])

        return b[1] - a[1] || aCharacter - bCharacter
      })

      const topOtherCharacters = {}
      for (const [character, count] of sortedOtherCharacters.slice(0, 5)) {
        topOtherCharacters[character] = count
      }
      return topOtherCharacters
    } catch (error) {
      console.error('Error getting top of other characters: ' + error)
    }
  }
}
