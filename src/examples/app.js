import { countSignsInFile } from '../index.js'

const filePath = 'input.txt'
const signCount = countSignsInFile(filePath)
console.log(`Sign count: ${signCount}`)
