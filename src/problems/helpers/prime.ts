export const isPrime = (num: number) => {
  let isPrime = true
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }

  return isPrime
}
