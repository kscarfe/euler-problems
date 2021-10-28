import { problem001 } from './problem001'

const problemsMap: Record<string, any> = {
  '001': problem001
}

export const runProblem = (problemNumber: string) => {
  problemsMap[problemNumber]()
}

export default runProblem
