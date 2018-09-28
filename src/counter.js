export const baseCounterValue = 'sep,26,2018,17:19:00'

const counter = (date, nextDate = null) => {
  const initial = date || baseCounterValue
  const now = new Date()
  let diff = now - (new Date(initial))

  if (!!nextDate) {
    diff = (new Date(initial)) - (new Date(nextDate))
  }

  const days = Math.floor(diff / (60 * 60 * 1000 * 24) * 1)
  const hours = Math.floor((diff % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000) * 1)
  const minutes = Math.floor(((diff % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) / (60 * 1000) * 1)
  const seconds = Math.floor((((diff % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000 * 1)

  return { days, hours, minutes, seconds }
}

export default counter