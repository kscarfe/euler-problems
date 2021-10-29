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
