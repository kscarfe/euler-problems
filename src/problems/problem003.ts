import { Problem } from './index'

export const problem003: Problem = {
  problemDetails: {
    title: `Largest prime factor`,
    description: `The prime factors of 13195 are 5, 7, 13 and 29.\nWhat is the largest prime factor of the number 600851475143 ?`
  },
  run: () => {
    const targetNumber = 600851475143

    const findFactors = (
      num: number
    ): { left: number; right: number } | null => {
      for (let n = 2; n < num; n++) {
        if (num % n === 0) {
          return { left: n, right: num / n }
        }
      }

      return null
    }

    const findPrimeFactors = (
      num: number,
      primeFactors: number[]
    ): number[] | null => {
      const factors = findFactors(num)

      if (factors) {
        findPrimeFactors(factors.left, primeFactors)
        findPrimeFactors(factors.right, primeFactors)
      } else {
        primeFactors.push(num)
      }

      return primeFactors
    }

    const primeFactors = findPrimeFactors(targetNumber, [])
    const largestPrimeFactor = primeFactors ? Math.max(...primeFactors) : null

    return largestPrimeFactor
  }
}
