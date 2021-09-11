new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
})

let date = new Date('jan 1 2022 00:00:00')
function counts() {
  let now = new Date()
  let gap = date - now
  console.log(gap)

  const days = Math.floor(gap / (1000 * 60 * 60 * 24))
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const mins = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60))
  const secs = Math.floor((gap % (1000 * 60)) / 1000)
  console.log(days)
  if (gap < 0) {
    document.querySelector('[data-value="days"]').innerText = 'Ура'
  } else {
    document.querySelector('[data-value="days"]').innerText = days
    document.querySelector('[data-value="hours"]').innerText = hours
    document.querySelector('[data-value="mins"]').innerText = mins
    document.querySelector('[data-value="secs"]').innerText = secs
  }
}
counts()
setInterval(counts, 1000)
