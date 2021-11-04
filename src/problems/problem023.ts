import { properDivisors, sum } from './helpers/math'
import { Problem } from '.'
import { logger } from './helpers/logger'

export const problem023: Problem = {
  problemDetails: {
    title: `Non-abundant sums`,
    description: `A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

    A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.
    
    As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.
    
    Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.`
  },
  run: () => {
    const limit = 28123
    let abundantNumbers = [12]
    for (let i = 13; i <= limit; i++) {
      const divisors = properDivisors(i)
      const total = sum(divisors)
      if (total > i) {
        abundantNumbers.push(i)
      }
    }

    const isSumOfTwoAbundantNumbers = (num: number): boolean => {
      if (num < 24) {
        return false
      }

      let abundantNumbersLower: number[] = []
      for (let i = 0; i < num; i++) {
        if (abundantNumbers[i] >= num) {
          break
        }

        abundantNumbersLower.push(abundantNumbers[i])
      }

      if (abundantNumbersLower.includes(num / 2)) {
        return true
      }

      const length = abundantNumbersLower.length
      for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
          if (abundantNumbersLower[i] + abundantNumbersLower[j] === num) {
            return true
          }
        }
      }

      return false
    }

    let total = 0
    for (let i = 1; i <= limit; i++) {
      if (!isSumOfTwoAbundantNumbers(i)) {
        total += i
      }
    }

    return total
  }
}
