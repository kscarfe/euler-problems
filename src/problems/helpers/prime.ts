export const isPrime = (num: number) => {
  const absNum = Math.abs(num)
  if (absNum === 2) {
    return true
  }

  if (absNum % 2 === 0) {
    return false
  }

  const limit = Math.sqrt(absNum)
  for (let i = 3; i <= limit; i += 2) {
    if (absNum % i === 0) {
      return false
    }
  }

  return true
}
