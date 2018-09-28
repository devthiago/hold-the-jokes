const label = process.env.NODE_ENV === 'development' ? 'testjoke' : 'jokes'
const GITHUB_API = 'https://api.github.com/repos/devthiago/hold-the-jokes/issues'
const GITHUB_PARAMS = ['state=closed', `labels=${label}`].join('&')

class Issue {
  constructor(issue) {
    this._issue = issue;
  }

  get snitch() {
    return this._issue.user.login
  }

  get snitchPhoto() {
    return this._issue.user.avatar_url
  }

  get message() {
    return this._issue.body
  }

  get date() {
    return this._issue.created_at
  }
}

export const fetchIssues = () => (
  fetch(`${GITHUB_API}?${GITHUB_PARAMS}`)
    .then((resp) => resp.json())
    .then((data) => data && data.map((issue) => new Issue(issue)))
)