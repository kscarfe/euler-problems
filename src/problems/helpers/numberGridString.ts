export const numberGridStringToNumberArray = (
  numberGridString: string,
  splitChar: 'space' | 'emptyString' = 'space'
) => {
  return numberGridString
    .split('\n')
    .map(row =>
      row
        .split(
          splitChar === 'space' ? ' ' : splitChar === 'emptyString' ? '' : ''
        )
        .map(numStr => parseInt(numStr))
    )
}
