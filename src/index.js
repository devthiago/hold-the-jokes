import './index.css'
import countFrom from './count-from.js'

const daysElement = document.getElementById('days')
const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secondsElement = document.getElementById('seconds')

let TIMEOUT_ID = null

const setTimeValue = (selector, value) => {
	const hasLeftZero = `${value}`.length === 1
	selector.innerHTML = hasLeftZero ? `0${value}` : value
}

const uptime = (date) => {
  const now = new Date()
  const countFromDate = new Date(date)
  const diff = now - countFromDate

  setTimeValue(daysElement, Math.floor(diff / (60 * 60 * 1000 * 24) * 1))
  setTimeValue(hoursElement, Math.floor((diff % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000) * 1))
  setTimeValue(minutesElement, Math.floor(((diff % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) / (60 * 1000) * 1))
  setTimeValue(secondsElement, Math.floor((((diff % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000 * 1))

  clearTimeout(TIMEOUT_ID)
  TIMEOUT_ID = setTimeout(() => uptime(countFromDate), 1000)
}

window.onload = () => uptime(countFrom)