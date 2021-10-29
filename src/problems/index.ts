import { problem001 } from './problem001'
import { problem002 } from './problem002'
import { problem003 } from './problem003'

export interface ProblemDetails {
  problemNumber: number
  title: string
  description: string
}

export interface Problem {
  problemDetails: ProblemDetails
  run: () => any
}

const problemsMap: Record<string, Problem> = {
  '001': problem001,
  '002': problem002,
  '003': problem003
}

export const runProblem = (number: string) => {
  const { problemDetails, run } = problemsMap[number]
  const { problemNumber, title, description } = problemDetails

  console.log(`Problem ${problemNumber}: ${title}\n${description}`)
  console.log(`Answer: ${run()}`)
}

export default runProblem