/**
 * A class that handles statistics of different signs a file.
 */
export class SignStatistics {
  /**
   *
  * @param text The text to analyze.
   */
  constructor (text) {
    this.text = text
  }

  /**
   *
   */
  getTopSigns () {
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
  }

  /**
   *
   */
  getTopVowels () {
    const vowels = 'aeiouyAEIOUY'
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
  }

  /**
   *
   */
  getTopConsonants () {
    const consonants = 'bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ'
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
  }
}
