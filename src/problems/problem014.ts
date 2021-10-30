import { Problem } from './index'

export const problem014: Problem = {
  problemDetails: {
    title: `Longest Collatz sequence`,
    description: `The following iterative sequence is defined for the set of positive integers:

    n → n/2 (n is even)
    n → 3n + 1 (n is odd)
    
    Using the rule above and starting with 13, we generate the following sequence:
    
    13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
    It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
    
    Which starting number, under one million, produces the longest chain?
    
    NOTE: Once the chain starts the terms are allowed to go above one million.`
  },
  run: () => {
    const limit = 1000000
    const nextTerm = (prevTerm: number) => {
      return prevTerm % 2 === 0 ? prevTerm / 2 : 3 * prevTerm + 1
    }

    let longestChain = {
      startingNumber: 0,
      length: 0
    }

    for (let n = 0; n < limit; n++) {
      const chain = [n]
      let currentTerm = n
      while (currentTerm > 1) {
        currentTerm = nextTerm(currentTerm)
        chain.push(currentTerm)
      }

      if (chain.length > longestChain.length) {
        longestChain = { startingNumber: n, length: chain.length }
      }
    }

    return longestChain.startingNumber
  }
}
