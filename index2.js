let targetDate = new Date('jan 1 2022 00:00:00')
function counts() {
  let now = new Date()
  let gap = targetDate - now
  console.log(gap)

  const days = pad(Math.floor(gap / (1000 * 60 * 60 * 24)))
  const hours = pad(Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
  const mins = pad(Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60)))
  const secs = pad(Math.floor((gap % (1000 * 60)) / 1000))
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

function pad(value) {
  return String(value).padStart(2, '0')
}
