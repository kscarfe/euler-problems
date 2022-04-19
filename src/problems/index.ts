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
import { problem011 } from './problem011'
import { problem012 } from './problem012'
import { problem013 } from './problem013'
import { problem014 } from './problem014'
import { problem015 } from './problem015'
import { problem016 } from './problem016'
import { problem017 } from './problem017'
import { problem018 } from './problem018'
import { problem019 } from './problem019'
import { problem020 } from './problem020'
import { problem021 } from './problem021'
import { problem022 } from './problem022'
import { problem023 } from './problem023'
import { problem024 } from './problem024'
import { problem025 } from './problem025'
import { problem026 } from './problem026'
import { problem027 } from './problem027'

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
  '010': problem010,
  '011': problem011,
  '012': problem012,
  '013': problem013,
  '014': problem014,
  '015': problem015,
  '016': problem016,
  '017': problem017,
  '018': problem018,
  '019': problem019,
  '020': problem020,
  '021': problem021,
  '022': problem022,
  '023': problem023,
  '024': problem024,
  '025': problem025,
  '026': problem026,
  '027': problem027
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
