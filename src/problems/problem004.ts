import { Problem } from './index'

export const problem004: Problem = {
  problemDetails: {
    title: `Largest palindrome product`,
    description: `A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.\nFind the largest palindrome made from the product of two 3-digit numbers.`
  },
  run: () => {
    const isPalindromic = (num: number) => {
      const numString = num.toString()
      const reversed = numString.split('').reverse().join('')
      return numString === reversed
    }

    let largestPalindromicNumber = 0
    for (let i = 100; i < 1000; i++) {
      for (let j = 100; j < 1000; j++) {
        const product = i * j
        if (isPalindromic(product) && product > largestPalindromicNumber) {
          largestPalindromicNumber = product
        }
      }
    }

    return largestPalindromicNumber
  }
}
