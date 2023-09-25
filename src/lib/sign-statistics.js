import { readFileSync } from 'fs'

/**
 *
 */
export class SignStatistics {
  /**
   *
   * @param filePath
   */
  constructor (filePath) {
    this.filePath = filePath
    this.fileContent = readFileSync(filePath, 'utf8')
  }

  /**
   *
   */
  getTopSigns () {
    const signCounts = {}

    for (const sign of this.fileContent) {
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

    for (const sign of this.fileContent) {
      if (vowels.includes(sign)) {
        if (vowelCounts[sign]) {
          vowelCounts[sign]++
        } else {
          vowelCounts[sign] = 1
        }
      }
    }

    const sortedVowels = Object.entries(vowelCounts).sort((a, b) => b[1] - a[1])
    const topVowels = sortedVowels.slice(0, 5)

    return topVowels
  }

  /**
   *
   */
  getTopConsonants () {
    const consonants = 'bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ'
    const consonantCounts = {}

    for (const sign of this.fileContent) {
      if (consonants.includes(sign)) {
        if (consonantCounts[sign]) {
          consonantCounts[sign]++
        } else {
          consonantCounts[sign] = 1
        }
      }
    }

    const sortedConsonants = Object.entries(consonantCounts).sort((a, b) => b[1] - a[1])
    const topConsonants = sortedConsonants.slice(0, 5)

    return topConsonants
  }
}
