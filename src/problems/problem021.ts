import { properDivisors, sum } from './helpers/math'
import { Problem } from './index'

export const problem021: Problem = {
  problemDetails: {
    title: `Amicable numbers`,
    description: `Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
    If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
    
    For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
    
    Evaluate the sum of all the amicable numbers under 10000.`
  },
  run: () => {
    const target = 10000
    let amicableNumbers: number[] = []
    for (let i = 2; i <= target; i++) {
      const sumA = sum(properDivisors(i))
      const sumB = sum(properDivisors(sumA))
      if (sumB === i && sumA !== i) {
        if (!amicableNumbers.includes(i)) {
          amicableNumbers.push(i)
        }
        if (!amicableNumbers.includes(sumA)) {
          amicableNumbers.push(sumA)
        }
      }
    }

    return sum(amicableNumbers)
  }
}
