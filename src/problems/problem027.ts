import { isPrime } from './helpers/prime'
import { indicesOf, trimString } from './helpers/string'
import { longDivision } from './helpers/math'
import { Problem } from '.'
import { logger } from './helpers/logger'

export const problem027: Problem = {
  problemDetails: {
    title: `Quadratic Primes`,
    description: `https://projecteuler.net/problem=27

    Quadratic formula: n^2 + n + 41

    Considering quadratics of the form:

    n^2 + an + b, where |a| < 1000 and |b| <= 1000 

    Find the product of the coefficients, a and b , for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0.`
  },
  run: () => {
    const longestVals = {
      primesCount: 0,
      a: 0,
      b: 0
    }
    // |a| < 1000
    for (let a = -999; a < 1000; a++) {
      // |b| <= 1000
      for (let b = -1000; b <= 1000; b++) {
        let n = 0
        while (isPrime(n * n + a * n + b)) {
          n++
        }

        if (n > longestVals.primesCount) {
          longestVals.primesCount = n
          longestVals.a = a
          longestVals.b = b
        }
      }
    }
    return longestVals.a * longestVals.b
  }
}
