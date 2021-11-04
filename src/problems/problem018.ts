import { logger } from './helpers/logger'
import { numberGridStringToNumberArray } from './helpers/numberGridString'
import { Problem } from './index'

export const problem018: Problem = {
  problemDetails: {
    title: `Maximum path sum I`,
    description: `By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

    3
    7 4
    2 4 6
    8 5 9 3
    
    That is, 3 + 7 + 4 + 9 = 23.
    
    Find the maximum total from top to bottom of the triangle below:
    
    75
    95 64
    17 47 82
    18 35 87 10
    20 04 82 47 65
    19 01 23 75 03 34
    88 02 77 73 07 63 67
    99 65 04 28 06 16 70 92
    41 41 26 56 83 40 80 70 33
    41 48 72 33 47 32 37 16 94 29
    53 71 44 65 25 43 91 52 97 51 14
    70 11 33 28 77 73 17 78 39 68 17 57
    91 71 52 38 17 14 91 43 58 50 27 29 48
    63 66 04 68 89 53 67 30 73 16 69 87 40 31
    04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
    
    NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)`
  },
  run: () => {
    const numString = `75\n95 64\n17 47 82\n18 35 87 10\n20 04 82 47 65\n19 01 23 75 03 34\n88 02 77 73 07 63 67\n99 65 04 28 06 16 70 92\n41 41 26 56 83 40 80 70 33\n41 48 72 33 47 32 37 16 94 29\n53 71 44 65 25 43 91 52 97 51 14\n70 11 33 28 77 73 17 78 39 68 17 57\n91 71 52 38 17 14 91 43 58 50 27 29 48\n63 66 04 68 89 53 67 30 73 16 69 87 40 31\n04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`

    const array = numberGridStringToNumberArray(numString, 'space')
    const numRows = array.length

    // 3 dimensional array represents the pyramid's rows, with an array of possible
    // totals at each index.
    const totals = [[array[0]]]
    for (let i = 1; i < numRows; i++) {
      const rowLength = array[i].length
      // Store array of possible totals in each position in the pyramid
      const totalsRow: number[][] = []
      for (let j = 0; j < rowLength; j++) {
        const arrayVal = array[i][j]
        // Leftmost number
        if (j === 0) {
          const prevTotal = totals[i - 1][j][0]
          totalsRow.push([prevTotal + arrayVal])
        }
        // Rightmost number
        else if (j === rowLength - 1) {
          const prevTotal = totals[i - 1][j - 1][0]
          totalsRow.push([prevTotal + arrayVal])
        }
        // Inner numbers - calculate for each possible total value above
        else {
          const prevTotalsLeft = totals[i - 1][j - 1]
          const prevTotalsRight = totals[i - 1][j]
          let newTotals = [
            ...prevTotalsLeft.map(val => val + arrayVal),
            ...prevTotalsRight.map(val => val + arrayVal)
          ]
          totalsRow.push(newTotals)
        }
      }
      totals.push(totalsRow)
    }

    // Flatten all possible totals in the bottom row
    const lastRowArrays = [...totals[numRows - 1]]
    const lastRowTotals = lastRowArrays.reduce((acc, curr) => {
      curr.forEach(val => acc.push(val))
      return acc
    }, [])

    // Find largest value from all possible totals
    const max = Math.max(0, ...lastRowTotals)

    return max
  }
}
