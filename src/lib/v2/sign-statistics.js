
export class SignStatistics {
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

  getTopSigns() {
    try {
      const signCounts = {}
      const signsInText = this.text.replace(/\s/g, '')

      for (const sign of signsInText) {
        if (signCounts[sign]) {
          signCounts[sign]++
        } else {
          signCounts[sign] = 1
        }
      }

      const sortedSigns = Object.entries(signCounts).sort((a, b) => b[1] - a[1])
      const topSigns = {}
      for (const [sign, count] of sortedSigns.slice(0, 5)) {
        topSigns[sign] = count
      }

      return topSigns
    } catch (error) {
      console.error('Error getting top signs: ' + error)
    }
  }

  getTopVowels() {
    try {
      const vowels = 'aeiouy'
      const vowelCounts = {}

      for (const sign of this.text) {
        if (vowels.includes(sign)) {
          if (vowelCounts[sign]) {
            vowelCounts[sign]++
          } else {
            vowelCounts[sign] = 1
          }
        }
      }

      const sortedVowels = Object.entries(vowelCounts).sort((a, b) => b[1] - a[1])
      const topVowels = {}
      for (const [sign, count] of sortedVowels.slice(0, 5)) {
        topVowels[sign] = count
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

      for (const sign of this.text) {
        if (consonants.includes(sign)) {
          if (consonantCounts[sign]) {
            consonantCounts[sign]++
          } else {
            consonantCounts[sign] = 1
          }
        }
      }

      const sortedConsonants = Object.entries(consonantCounts).sort((a, b) => b[1] - a[1])
      const topConsonants = {}
      for (const [sign, count] of sortedConsonants.slice(0, 5)) {
        topConsonants[sign] = count
      }
      return topConsonants
    } catch (error) {
      console.error('Error getting top consonants: ' + error)
    }
  }

  getTopOtherSigns() {
    // The top 5 signs that are not letters
    try {
      const otherSignsRegex = /[^\p{Alphabetic}\s]+/gu
      const otherSignsCounts = {}

      for (const sign of this.text) {
        if (otherSignsRegex.test(sign)) {
          if (otherSignsCounts[sign]) {
            otherSignsCounts[sign]++
          } else {
            otherSignsCounts[sign] = 1
          }
        }
      }

      const sortedOtherSigns = Object.entries(otherSignsCounts).sort((a, b) => {
        const aSign = isNaN(Number(a[0])) ? a[0] : Number(a[0])
        const bSign = isNaN(Number(b[0])) ? b[0] : Number(b[0])
      
        return b[1] - a[1] || aSign - bSign
      })
      
      const topOtherSigns = {}
      for (const [sign, count] of sortedOtherSigns.slice(0, 5)) {
        topOtherSigns[sign] = count
      }
      return topOtherSigns
    } catch (error) {
      console.error('Error getting top of other signs: ' + error)
    }
  }
}
