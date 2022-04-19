import { Problem } from '.'
import { sum } from './helpers/math'

export const problem028: Problem = {
  problemDetails: {
    title: `Number spiral diagonals`,
    description: `Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

    21 22 23 24 25
    20  7  8  9 10
    19  6  1  2 11
    18  5  4  3 12
    17 16 15 14 13
    
    It can be verified that the sum of the numbers on the diagonals is 101.
    
    What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?`
  },
  run: () => {
    const diagonals = [1]
    const maxWidth = 1001
    let width = 1
    let num = 1
    while (width < maxWidth) {
      // increase square size by 2 - next layer of spiral
      width += 2
      // jump width - 1 ahead 4 times to find the diagonals
      const increment = width - 1
      for (let i = 0; i < 4; ++i) {
        num += increment
        diagonals.push(num)
      }
    }

    return sum(diagonals)
  }
}
