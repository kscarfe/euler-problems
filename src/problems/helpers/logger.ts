import { config } from './../../config'

export const logger = (msg: string) => {
  if (config.enableLogging) {
    console.log(`### ${msg}`)
  }
}
