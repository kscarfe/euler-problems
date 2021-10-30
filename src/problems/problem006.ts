import { Problem } from './index'

export const problem006: Problem = {
  problemDetails: {
    title: `Sum square difference`,
    description: `Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.`
  },
  run: () => {
    let sumSquares = 0
    let sum = 0

    for (let n = 1; n <= 100; n++) {
      sumSquares += Math.pow(n, 2)
      sum += n
    }

    const squareSum = Math.pow(sum, 2)

    return Math.abs(squareSum - sumSquares)
  }
}
