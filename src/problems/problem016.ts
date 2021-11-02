import { logger } from './helpers/logger'
import { longProduct, longSum } from './helpers/math'
import { Problem } from './index'

export const problem016: Problem = {
  problemDetails: {
    title: `Power digit sum`,
    description: `2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

    What is the sum of the digits of the number 2^1000?`
  },
  run: () => {
    const exponent = 1000
    let lastValStr = '2'
    for (let i = 1; i < exponent; i++) {
      lastValStr = longProduct(lastValStr, 2)
    }

    return longSum(lastValStr.split(''))
  }
}
