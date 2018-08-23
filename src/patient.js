class Patient {
  constructor (api) {
    this.api = api
  }

  lastFirst () {
    return `${this.last_name}, ${this.first_name}`
  }

  average (key) {
    const sum = (accumulator, value) => { return accumulator + value }

    let values = this.visits.map((visit) => { return visit[key] })
    let total = values.reduce(sum)

    return total / this.visits.length
  }
}
