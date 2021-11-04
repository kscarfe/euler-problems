export const indicesOf = (sourceStr: string, strToFind: string): number[] => {
  const indices = []
  const sourceStrLength = sourceStr.length
  const strToFindLength = strToFind.length
  for (let i = 0; i < sourceStrLength; i++) {
    if (i + strToFindLength <= sourceStrLength) {
      if (sourceStr.substring(i, i + strToFindLength) === strToFind) {
        indices.push(i)
      }
    }
  }

  return indices
}

export const trimString = (
  sourceStr: string,
  char: string,
  from: 'start' | 'end' | 'both' = 'both'
): string => {
  let trimmedStr = sourceStr
  if (from === 'start' || from === 'both') {
    for (let i = 0; i < trimmedStr.length; i++) {
      if (trimmedStr[i] !== char) {
        trimmedStr = trimmedStr.substring(i)
        break
      }
    }
  }

  if (from === 'end' || from === 'both') {
    for (let i = trimmedStr.length - 1; i > 0; i--) {
      if (trimmedStr[i] !== char) {
        trimmedStr = trimmedStr.substring(0, i)
        break
      }
    }
  }

  return trimmedStr
}
