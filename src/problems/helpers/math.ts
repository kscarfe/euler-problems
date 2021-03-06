export const product = (nums: number[]) => {
  return nums.reduce((acc, curr) => {
    return acc * curr
  }, 1)
}

export const strDigitsProduct = (str: string) => {
  const nums = str.split('').map(digit => parseInt(digit))
  return nums.reduce((acc, curr) => {
    return acc * curr
  }, 1)
}

export const sum = (nums: number[]) => {
  return nums.reduce((acc, curr) => {
    return curr ? acc + curr : acc
  }, 0)
}

export const longSum = (nums: number[] | string[]): string => {
  const numStrings = nums.map(num => num.toString())
  const numsCount = nums.length
  const numLengths = numStrings.map(str => str.length)
  const longest = Math.max(0, ...numLengths)

  // Create 2 dimensional array of digits with leading 0s
  const numsArray = numStrings.map(str => str.split('').map(Number))
  for (let i = 0; i < numsCount; i++) {
    const length = numsArray[i].length
    for (let j = 0; j < longest - length; j++) {
      numsArray[i].unshift(0)
    }
  }

  // Sum columns from right to left, carrying remainder to next col
  let answerString = ''
  let carryOver = 0
  for (let i = longest - 1; i >= 0; i--) {
    let colTotal = 0
    for (let j = 0; j < numsCount; j++) {
      colTotal += numsArray[j][i]
    }

    colTotal += carryOver
    const { lastDigit, carryOver: carry } = getLastAndCarryOver(colTotal)

    carryOver = carry
    answerString = `${lastDigit}${answerString}`
  }
  answerString = `${carryOver || ''}${answerString}`

  return answerString
}

export const longProduct = (a: string | number, b: string | number): string => {
  const aDigits = a
    .toString()
    .split('')
    .map(char => parseInt(char))
  const bDigits = b
    .toString()
    .split('')
    .map(char => parseInt(char))
  const products: string[] = []
  const aLength = aDigits.length
  const bLength = bDigits.length

  for (let i = aLength - 1; i >= 0; i--) {
    // Initialise array to hold digits of this product, padding right
    // with an extra 0 for each iteration after the first
    const productDigits: number[] =
      i < aLength - 1 ? new Array(aLength - (i + 1)).fill(0) : []

    // Multiply bDigits right to left by the i'th aDigit
    let carryOver = 0
    for (let j = bLength - 1; j >= 0; j--) {
      const product = aDigits[i] * bDigits[j] + carryOver

      const { lastDigit, carryOver: carry } = getLastAndCarryOver(product)
      carryOver = carry

      productDigits.unshift(j === 0 ? product : lastDigit)
    }
    products.push(productDigits.join(''))
  }

  return longSum(products)
}

export const longDivision = (
  dividend: number,
  divisor: number,
  toDecimalPlaces?: number
): string => {
  const dividendParts = dividend.toString().split('.')
  const startingDecimalPlaces = dividendParts[1]?.length || 0
  const decimalIndex = dividendParts[0].length
  const dividendArray = dividend
    .toString()
    .split('')
    .map(val => (val !== '.' ? parseInt(val) : null))
    .filter(Boolean) as number[]

  if (toDecimalPlaces) {
    for (let i = startingDecimalPlaces; i < toDecimalPlaces; i++) {
      dividendArray.push(0)
    }
  }

  let resultArray: number[] = []
  let bottomNumber1 = 0
  let bottomNumber2 = 0
  dividendArray.forEach(n => {
    bottomNumber1 = bottomNumber1 * 10 + n
    const answer = Math.floor(bottomNumber1 / divisor)
    resultArray.push(answer)
    bottomNumber2 = answer * divisor
    bottomNumber1 -= bottomNumber2
  })

  const resultArrayStr = resultArray.join('')
  const resultStr = toDecimalPlaces
    ? resultArrayStr.substring(0, decimalIndex) +
      '.' +
      resultArrayStr.substring(decimalIndex)
    : resultArrayStr

  return resultStr
}

const getLastAndCarryOver = (
  num: number | string
): { lastDigit: number; carryOver: number } => {
  const numStr = num.toString()
  const length = numStr.length
  const lastDigit = numStr.slice(-1)
  const carryOver = length > 1 ? numStr.slice(0, numStr.length - 1) : '0'

  return { lastDigit: parseInt(lastDigit), carryOver: parseInt(carryOver) }
}

export const longFactorial = (num: number): string => {
  let runningTotalString = num.toString()
  for (let i = num - 1; i > 0; i--) {
    runningTotalString = longProduct(runningTotalString, i)
  }

  return runningTotalString
}

export const properDivisors = (num: number): number[] => {
  const limit = num / 2
  const divisors = [1]
  for (let i = 2; i <= limit; i++) {
    if (num % i === 0) {
      divisors.push(i)
    }
  }

  return divisors
}
