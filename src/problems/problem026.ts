import { indicesOf, trimString } from './helpers/string'
import { longDivision } from './helpers/math'
import { Problem } from '.'
import { logger } from './helpers/logger'

export const problem026: Problem = {
  problemDetails: {
    title: `Reciprocal cycles`,
    description: `A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

    1/2	= 	0.5
    1/3	= 	0.(3)
    1/4	= 	0.25
    1/5	= 	0.2
    1/6	= 	0.1(6)
    1/7	= 	0.(142857)
    1/8	= 	0.125
    1/9	= 	0.(1)
    1/10	= 	0.1
    Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.
    
    Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.`
  },
  run: () => {
    const debugStart = 1
    const limit = 1000
    let longestCycle = 0
    let longestCycleDivisor = 0
    let longestCycleDecimalPart = ''
    let longestCyclePart = ''
    for (let i = debugStart; i < limit; i++) {
      // only fetch result up to limit * 3 digits in length, as there seems
      // to be a pattern that a divisor's longest repeating cycle length is
      // always 1 less than the divisor (e.g. 1/7's longest cycle is 6 digits)
      // and we'll check to see if it repeats 2+ times
      const result = longDivision(1, i, limit * 3)
      const resultParts = result.split('.')
      const decimalPart = resultParts[1] || resultParts[0]
      const trimmedDecimalPart = trimString(decimalPart, '0', 'end')
      const length = trimmedDecimalPart.length
      const halfLength = length / 2

      // iterate over each digit in the first half of the trimmedDecimalPart string
      for (let j = 0; j < halfLength - 1; j++) {
        // identify how many times the current digit occurs in the string
        const indices = indicesOf(trimmedDecimalPart, trimmedDecimalPart[j])

        // only continue evaluation if the digit repeats at least once,
        // and is not just a series of 1 or 2 length repetitions
        // (e.g. 1.66666 or 1.010101) to avoid unnecessary cycles
        if (indices.length > 1 && indices.length <= halfLength) {
          // look for repetition of increasingly large sets of digits
          // from the current index.
          for (let k = 1; k <= halfLength; k++) {
            const subStr = trimmedDecimalPart.substring(j, j + k)
            const nextIndices = indicesOf(trimmedDecimalPart, subStr)
            // series is not repeated, so we can move to the next digit
            if (nextIndices.length === 1) {
              break
            }

            // series is repeated at least 3 times - candidate for longest cycle
            if (
              nextIndices.length > 2 &&
              trimmedDecimalPart.substring(nextIndices[1], nextIndices[2]) ===
                subStr
            ) {
              if (subStr.length > longestCycle) {
                longestCycle = subStr.length
                longestCycleDivisor = i
                longestCycleDecimalPart = trimmedDecimalPart
                longestCyclePart = subStr

                logger(`i: ${i}, j: ${j}, k: ${k}`)
                logger(
                  `trimmedDecimalPart: ${trimmedDecimalPart}, subStr: ${subStr}`
                )
              }

              // stop evaluating the current divisor and move to the next
              j = length
              break
            }
          }
        }
      }
    }

    console.log(`longestCycle: ${longestCycle}`)
    console.log(`longestCycleDecimalPart: ${longestCycleDecimalPart}`)
    console.log(`longestCyclePart: ${longestCyclePart}`)

    return longestCycleDivisor
  }
}
