import counter, { baseCounterValue } from './counter.js'
import { mdToHtml } from './markdown'

export const reportTimeTemplate = (date, nextDate) => {
  const { days, hours, minutes, seconds } = counter(date, nextDate)
  return `${days}d ${hours}h ${minutes}m ${seconds}s`
}

export const reportsTemplate = (issue, index, issues) => {
  const prevIssue = issues[index + 1]

  return `
    <div class="row comment-box p-1 pt-3 pr-4">
      <picture class="col-lg-2 col-3 user-img text-center">
        <img src="${issue.snitchPhoto}" class="main-cmt-img">
      </picture>
      <div class="col-lg-10 col-9 user-comment bg-light rounded pb-1">
        <div class="row">
          <div class="col-lg-8 col-6 pr-0">
            <p class="w-100 p-2 m-0">
              <strong>@${issue.snitch} says that Thiago said:</strong>
            </p>
            <p class="w-100 p-2 m-0">${mdToHtml(issue.message)}</p>
          </div>
          <div class="col-lg-4 col-6">
            <p class="w-100 p-2 m-0">
              <span class="float-right">
              ${reportTimeTemplate(
                issue.date,
                (prevIssue && prevIssue.date) || baseCounterValue
              )}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  `
}

export const reportsContainerTemplate = reports => {
  return `
    <div class="row issues">
      <div class="col-12">
        ${reports}
      </div>
    </div>
  `
}
