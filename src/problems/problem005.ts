import { Problem } from './index'

export const problem005: Problem = {
  problemDetails: {
    problemNumber: 1,
    title: `Smallest multiple`,
    description: `2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.\nWhat is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?`
  },
  run: () => {
    const limit = 999999999999
    let number = 40

    const isEvenlyDivisible = (num: number) => {
      for (let n = 20; n >= 2; n--) {
        if (num % n !== 0) {
          return false
        }
      }

      return true
    }

    while (number < limit) {
      if (isEvenlyDivisible(number)) {
        return number
      }
      number++
    }

    return `Failed to find answer below ${limit}`
  }
}
