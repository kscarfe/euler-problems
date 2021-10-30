import { Problem } from './index'

export const problem009: Problem = {
  problemDetails: {
    title: `Special Pythagorean triplet`,
    description: `A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

    a^2 + b^2 = c^2

    For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
    
    There exists exactly one Pythagorean triplet for which a + b + c = 1000.
    Find the product abc.`
  },
  run: () => {
    const limit = 1000

    const isTriplet = (a: number, b: number, c: number) => {
      return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)
    }

    for (let a = 0; a < limit; a++) {
      for (let b = a + 1; b < limit; b++) {
        for (let c = b + 1; c < limit; c++) {
          if (isTriplet(a, b, c)) {
            if (a + b + c === 1000) {
              return a * b * c
            }
          }
        }
      }
    }

    return `Failed to find answer after ${limit} iterations per loop.`
  }
}
