import moment from "moment"

export default class FormatedDate {
    #currentDay: number
    #currentMonth: number
    #currentYear: number
    #nextDay: number
    #nextMonth: number

    constructor() {
        const data = new Date(2022, 1,30)
        this.#currentDay = data.getDate()
        this.#currentMonth = data.getMonth() + 1
        this.#currentYear = data.getFullYear()
    }

    set nextDay(currentDay) {
        const lastDay = this.lastMonthDay
        if (currentDay == lastDay) {
            this.#nextDay = 1
            this.#nextMonth = this.#currentMonth + 1
        } else {
            this.#nextDay = this.#currentDay + 1
            this.#nextMonth = this.#currentMonth
        }
    }

    get lastMonthDay() {
        const date = new Date(this.#currentYear, this.#currentMonth, 0)
        return date.getDate()
    }

    get currentDate(): string {
        const day = this.#currentDay < 10 ? `0${this.#currentDay}` : this.#currentDay
        const month = this.#currentMonth < 10 ? `0${this.#currentMonth}` : this.#currentMonth

        return `${day}/${month}/${this.#currentYear}`
    }

    get nextFirstDay(): string[] {
        const nextDays = []
        let tomorrow = this.#currentDay + 1
        
        const isSameMonth = tomorrow <= this.lastMonthDay

        while (nextDays.length < 4) {
            let day = tomorrow < 10 ? `0${tomorrow}` : tomorrow
            let month = this.#currentMonth < 10 ? `0${this.#currentMonth}` : this.#currentMonth

            if (isSameMonth) {
                nextDays.push(`${day}/${month}/${this.#currentYear}`)
                tomorrow++
            }else{
                tomorrow = 1
                day = tomorrow < 10 ? `0${tomorrow}` : tomorrow
                month = this.#currentMonth + 1 < 10 ? `0${this.#currentMonth + 1}` : this.#currentMonth + 1
                
                tomorrow++
                nextDays.push(`${day}/${month}/${this.#currentYear}`)
            }
        }

        return nextDays
    }

}