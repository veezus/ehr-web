class Patient {
  constructor (api) {
    this.api = api
  }

  lastFirst () {
    return `${this.last_name}, ${this.first_name}`
  }

  latestVisit () {
    return this.visits.sort((visit) => {
      return visit.date
    })[0]
  }
}
