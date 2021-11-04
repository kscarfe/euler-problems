import { Problem } from '.'
import { longSum } from './helpers/math'

export const problem025: Problem = {
  problemDetails: {
    title: `1000-digit Fibonacci number`,
    description: `The Fibonacci sequence is defined by the recurrence relation:

    F_n = F_n−1 + F_n−2, where F_1 = 1 and F_2 = 1.
    Hence the first 12 terms will be:
    
    F_1 = 1
    F_2 = 1
    F_3 = 2
    F_4 = 3
    F_5 = 5
    F_6 = 8
    F_7 = 13
    F_8 = 21
    F_9 = 34
    F_10 = 55
    F_11 = 89
    F_12 = 144
    The 12th term, F_12, is the first term to contain three digits.
    
    What is the index of the first term in the Fibonacci sequence to contain 1000 digits?`
  },
  run: () => {
    const limit = 1000
    let nMinus1 = '1'
    let nMinus2 = '1'
    let nextFibonacci = '2'
    let index = 3
    while (nextFibonacci.length < limit) {
      nMinus2 = nMinus1
      nMinus1 = nextFibonacci
      nextFibonacci = longSum([nMinus1, nMinus2])
      index++
    }

    return index
  }
}
