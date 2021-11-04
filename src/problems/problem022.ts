import { Problem } from './index'
import * as fs from 'fs'

export const problem022: Problem = {
  problemDetails: {
    title: `Names scores`,
    description: `Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

    For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.
    
    What is the total of all the name scores in the file?`
  },
  run: () => {
    const fileContents = fs.readFileSync(
      `${process.cwd()}/src/files/p022_names.txt`
    )

    const namesArray = fileContents
      .toString()
      .split(',')
      .map(name => name.replace(/"/g, ''))

    const sortedNames = namesArray.sort((a, b) => (a < b ? -1 : 1))

    const getLetterScore = (letter: string): number => {
      return letter.charCodeAt(0) - 64
    }

    const getWordScore = (word: string): number => {
      return word.split('').reduce((acc, curr) => {
        return (acc += getLetterScore(curr))
      }, 0)
    }

    const total = sortedNames.reduce((acc, curr, index) => {
      return (acc += getWordScore(curr) * (index + 1))
    }, 0)

    return total
  }
}
