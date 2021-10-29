import { isPrime } from './helpers/prime'
import { Problem } from './index'

export const problem007: Problem = {
  problemDetails: {
    problemNumber: 1,
    title: `10001st prime`,
    description: `By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.\nWhat is the 10,001st prime number?`
  },
  run: () => {
    let primeCount = 2
    let highestPrime = 3
    let number = 4

    while (primeCount < 10001) {
      if (isPrime(number)) {
        primeCount++
        highestPrime = number
      }

      number++
    }

    return highestPrime
  }
}
