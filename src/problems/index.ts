import chalk from 'chalk'
import { problem001 } from './problem001'
import { problem002 } from './problem002'
import { problem003 } from './problem003'
import { problem004 } from './problem004'
import { problem005 } from './problem005'
import { problem006 } from './problem006'
import { problem007 } from './problem007'
import { problem008 } from './problem008'
import { problem009 } from './problem009'
import { problem010 } from './problem010'

export interface ProblemDetails {
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
  '003': problem003,
  '004': problem004,
  '005': problem005,
  '006': problem006,
  '007': problem007,
  '008': problem008,
  '009': problem009,
  '010': problem010
}

export const runProblem = (number: string) => {
  const problem = problemsMap[number]
  if (!problem) throw new Error(`No problem found with id: ${number}`)

  const { problemDetails, run } = problem
  const { title, description } = problemDetails

  const problemNumber = parseInt(number)

  console.log(chalk.green(`Problem ${problemNumber}: ${title}`))
  console.log(`${chalk.green('Description:')} ${description}\n`)
  console.log(`${chalk.green('Answer:')} ${run()}\n`)
}

export default runProblem
