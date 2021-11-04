import { groupByN } from './helpers/array'
import { logger } from './helpers/logger'
import { longProduct, longSum } from './helpers/math'
import { Problem } from './index'

export const problem017: Problem = {
  problemDetails: {
    title: `Number letter counts`,
    description: `If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

    If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
    
    
    NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.`
  },
  run: () => {
    const singlesWordMap: Record<string, string> = {
      '1': 'one',
      '2': 'two',
      '3': 'three',
      '4': 'four',
      '5': 'five',
      '6': 'six',
      '7': 'seven',
      '8': 'eight',
      '9': 'nine'
    }

    const teensWordMap: Record<string, string> = {
      '10': 'ten',
      '11': 'eleven',
      '12': 'twelve',
      '13': 'thirteen',
      '14': 'fourteen',
      '15': 'fifteen',
      '16': 'sixteen',
      '17': 'seventeen',
      '18': 'eighteen',
      '19': 'nineteen'
    }

    const tensWordMap: Record<string, string> = {
      '2': 'twenty',
      '3': 'thirty',
      '4': 'forty',
      '5': 'fifty',
      '6': 'sixty',
      '7': 'seventy',
      '8': 'eighty',
      '9': 'ninety'
    }

    // Maps number indicating nth group of 3 from the right to
    // the appropriate word
    const bigNumsMap: Record<string, string> = {
      '1': '',
      '2': 'thousand',
      '3': 'million',
      '4': 'billion',
      '5': 'trillion'
    }

    const tripleNumberToWords = (numStrArray: string[]) => {
      // Left fill triple with 0s
      while (numStrArray.length < 3) {
        numStrArray.unshift('0')
      }

      let words = ''

      if (numStrArray[0] !== '0') {
        words += singlesWordMap[numStrArray[0]] + 'hundred'
        if (numStrArray[1] !== '0' || numStrArray[2] !== '0') {
          words += 'and'
        }
      }

      if (numStrArray[1] !== '0') {
        if (numStrArray[1] === '1') {
          words += teensWordMap[numStrArray.slice(1).join('')]
          return words
        } else {
          words += tensWordMap[numStrArray[1]]
        }
      }

      if (numStrArray[2] !== '0') {
        words += singlesWordMap[numStrArray[2]]
      }

      return words
    }

    const numberToWords = (num: number): string => {
      const numStrArray = num.toString().split('')
      const triplesArray = groupByN(numStrArray, 3, true)

      let words = ''
      triplesArray.forEach((triple, index) => {
        const tripleWords = tripleNumberToWords(triple)
        // Add the word 'and' before the final 2 digits, if not '00'
        if (
          triplesArray.length > 1 &&
          index === triplesArray.length - 1 &&
          tripleWords !== '' &&
          triplesArray[index][0] === '0'
        ) {
          words += 'and'
        }

        words += tripleWords

        // Add big number word after each triple before the last
        if (tripleWords !== '') {
          words += bigNumsMap[triplesArray.length - index]
        }
      })

      return words
    }

    const target = 1000
    let fullWordsString = ''
    for (let i = 1; i <= target; i++) {
      const words = numberToWords(i)
      fullWordsString += words
    }

    return fullWordsString.length
  }
}
