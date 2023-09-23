import { readFileSync } from 'fs'

function countSignsInFile(filePath) {

    const fileContent = readFileSync(filePath)
    const signCount = fileContent.length
    return signCount
}

export default countSignsInFile
