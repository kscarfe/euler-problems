import chalk from 'chalk'
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
  const problem = problemsMap[number]
  if (!problem) throw new Error(`No problem found with id: ${number}`)

  const { problemDetails, run } = problem
  const { problemNumber, title, description } = problemDetails

  console.log(chalk.green(`Problem ${problemNumber}: ${title}`))
  console.log(`${chalk.green('Description:')} ${description}\n`)
  console.log(`${chalk.green('Answer:')} ${run()}\n`)
}

export default runProblem
