import './index.css'
import { reportsTemplate, reportsContainerTemplate } from './templates.js'
import { fetchIssues } from './github.js'
import counter from './counter.js'

const daysElement = document.getElementById('days')
const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secondsElement = document.getElementById('seconds')
const reportsElement = document.getElementById('reports')

let COUNTER_TIMEOUT_ID = null
let POLLING_TIMEOUT_ID = null

const renderCounterValue = (selector, value) => {
	const hasLeftZero = `${value}`.length === 1
	selector.innerHTML = hasLeftZero ? `0${value}` : value
}

const renderCounter = (date) => {
  const { days, hours, minutes, seconds } = counter(date)

  renderCounterValue(daysElement, days)
  renderCounterValue(hoursElement, hours)
  renderCounterValue(minutesElement, minutes)
  renderCounterValue(secondsElement, seconds)

  clearTimeout(COUNTER_TIMEOUT_ID)
  COUNTER_TIMEOUT_ID = setTimeout(() => renderCounter(date), 1000)
}

const renderIssues = (issues) => {
  if (issues.length === 0) {
    return null
  }

  const reports = issues.map(reportsTemplate).join('')
  reportsElement.innerHTML = reportsContainerTemplate(reports)

  return issues[0].date;
}

window.onload = () => {
  fetchIssues()
    .then(renderIssues)
    .then(renderCounter)
}
