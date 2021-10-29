import { isPrime } from './helpers/prime'
import { Problem } from './index'

export const problem010: Problem = {
  problemDetails: {
    title: `Summation of primes`,
    description: `The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.\nFind the sum of all the primes below two million.`
  },
  run: () => {
    const limit = 2000000
    let sum = 2
    let loopCount = 0

    for (let n = 3; n < limit; n++) {
      loopCount++
      if (isPrime(n)) {
        sum += n
      }
    }

    return sum
  }
}
