import chalk from 'chalk'
import prompts from 'prompts'
import { runProblem } from './problems'

const start = async () => {
  console.log(chalk.yellow(`Euler Problems!\n`))
  try {
    const arg = process.argv.slice(2)[0]

    const problemNumber =
      arg ||
      (
        await prompts({
          type: 'text',
          name: 'selection',
          message: 'Enter Euler Problem number:'
        })
      ).selection

    if (!problemNumber) {
      throw new Error(`No problem number input found`)
    }

    const formattedProblemNumber =
      problemNumber && problemNumber.padStart(3, '0')

    runProblem(formattedProblemNumber)
  } catch (error) {
    console.log(chalk.red(`Error: ${chalk.white((error as Error).message)}`))
  }
}

start()
