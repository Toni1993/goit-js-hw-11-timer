const fieldDays = document.querySelector('[data-value="days"]')
const fieldHours = document.querySelector('[data-value="hours"]')
const fieldMins = document.querySelector('[data-value="mins"]')
const fieldSecs = document.querySelector('[data-value="secs"]')

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector
    this.targetDate = targetDate
    this.deltaTime = 0
  }

  start() {
    setInterval(() => {
      let currentDate = Date.now()
      let deltaTime = this.targetDate - currentDate
      let days = pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)))
      let hours = pad(Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      let mins = pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)))
      let secs = pad(Math.floor((deltaTime % (1000 * 60)) / 1000))
    }, 1000)
  }
  pad() {
    return String().padStart(2, '0')
  }
}

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2021'),
})

timer1.start()
