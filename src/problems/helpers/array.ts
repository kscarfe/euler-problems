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
