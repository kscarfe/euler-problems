export const groupByN = (
  values: Array<any>,
  n: number,
  rightToLeft?: boolean
) => {
  const length = values.length
  let result = []
  if (rightToLeft) {
    for (let i = length - n; i >= 0; i -= n) {
      result.unshift(values.slice(i, i + n))
    }
    const leftoverCount = length % n
    if (leftoverCount !== 0) {
      result.unshift(values.slice(0, leftoverCount))
    }
  } else {
    for (let i = 0; i < length; i += n) {
      result.push(values.slice(i, i + n))
    }
  }

  return result
}

export const permutations = (digits: number[]): number[][] => {
  const permutations = [digits.slice()]
  const length = digits.length
  const used = new Array(length).fill(0)

  let i = 1
  let k = 0
  let temp = 0
  while (i < length) {
    if (used[i] < i) {
      k = i % 2 && used[i]
      temp = digits[i]
      digits[i] = digits[k]
      digits[k] = temp
      ++used[i]
      i = 1
      permutations.push(digits.slice())
    } else {
      used[i] = 0
      ++i
    }
  }
  return permutations
}
