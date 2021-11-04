import { longFactorial } from './helpers/math'
import { Problem } from './index'

export const problem020: Problem = {
  problemDetails: {
    title: `Factorial digit sum`,
    description: `n! means n × (n − 1) × ... × 3 × 2 × 1

    For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
    and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
    
    Find the sum of the digits in the number 100!`
  },
  run: () => {
    const target = 100
    const factorialString = longFactorial(target)
    const total = factorialString.split('').reduce((acc, curr) => {
      const num = parseInt(curr)
      return (acc += num)
    }, 0)

    return total
  }
}
