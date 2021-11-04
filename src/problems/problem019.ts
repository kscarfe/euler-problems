import { Problem } from './index'

export const problem019: Problem = {
  problemDetails: {
    title: `Counting Sundays`,
    description: `You are given the following information, but you may prefer to do some research for yourself.

    1 Jan 1900 was a Monday.
    Thirty days has September,
    April, June and November.
    All the rest have thirty-one,
    Saving February alone,
    Which has twenty-eight, rain or shine.
    And on leap years, twenty-nine.
    A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
    How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?`
  },
  run: () => {
    type Days = Record<number, string>
    type Months = Record<number, Days>
    type Years = Record<number, Months>

    const isLeapYear = (year: number) => {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
    }

    const monthDaysMap: Record<number, number> = {
      0: 31, // January
      1: 28,
      2: 31,
      3: 30,
      4: 31,
      5: 30,
      6: 31,
      7: 31,
      8: 30,
      9: 31,
      10: 30,
      11: 31
    }

    const getDaysInMonth = (monthNumber: number, isLeapYear: boolean) => {
      return monthNumber === 1 && isLeapYear ? 29 : monthDaysMap[monthNumber]
    }

    const weekdays = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ]

    const getNextWeekday = (previous: string) => {
      const previousIndex = weekdays.indexOf(previous)
      return previousIndex === weekdays.length - 1
        ? weekdays[0]
        : weekdays[previousIndex + 1]
    }

    // Build date to weekday lookup
    const dateToDayMap: Years = {}
    let previousWeekDay = 'Sunday'
    for (let year = 1900; year <= 2000; year++) {
      const months: Months = {}
      for (let month = 0; month < 12; month++) {
        const days: Days = {}
        const numDays = getDaysInMonth(month, isLeapYear(year))
        for (let day = 0; day < numDays; day++) {
          const nextWeekDay = getNextWeekday(previousWeekDay)
          days[day] = nextWeekDay
          previousWeekDay = nextWeekDay
        }
        months[month] = days
      }
      dateToDayMap[year] = months
    }

    let sundaysCount = 0
    for (let year = 1901; year <= 2000; year++) {
      for (let month = 0; month < 12; month++) {
        if (dateToDayMap[year][month][0] === 'Sunday') {
          sundaysCount++
        }
      }
    }

    return sundaysCount
  }
}
