import { Problem } from './index'

export const problem015: Problem = {
  problemDetails: {
    title: `Lattice paths`,
    description: `Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.


    How many such routes are there through a 20×20 grid?`
  },
  run: () => {
    const gridWidthToSolveFor = 20
    // We need to allow for one extra row and col to get the desired
    // answer from Pascal's pyramid
    const squareGridWidth = gridWidthToSolveFor + 1

    // Create a grid full of 0s
    const grid = new Array(squareGridWidth).fill(
      new Array(squareGridWidth).fill(0),
      1
    )
    // Fill first row with 1s
    grid[0] = new Array(squareGridWidth).fill(1)

    // Iterate over remaining rows, setting each value to the sum of the
    // value above + the value to the left of it (Pascal's triangle on its side)
    for (let row = 1; row < squareGridWidth; row++) {
      for (let col = 0; col < squareGridWidth; col++) {
        if (col === 0) {
          grid[row][col] = 1
        } else {
          grid[row][col] = grid[row][col - 1] + grid[row - 1][col]
        }
      }
    }

    const lastCol = squareGridWidth - 1

    return grid[lastCol][lastCol]
  }
}
