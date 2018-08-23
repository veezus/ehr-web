class Api {
  constructor (listener) {
    this.baseUrl = 'http://localhost:3000'
    this.listener = listener
    this.patients = []
    this.fetchPatients()
  }

  fetchPatients () {
    axios.get(this._patientsUrl())
      .then(async (response) => {
        for (let patientData of response.data) {
          let patient = Object.assign((new Patient(this)), patientData)
          await this.fetchVisitsFor(patient)
          this.patients.push(patient)
        }

        this.listener.dispatchEvent(new Event('PatientsGraphFetched'))
      })
      .catch((error) => {
        console.log('Error fetching patients:', error)
        return []
      })
  }

  async fetchVisitsFor (patient) {
    return new Promise((resolve) => {
      axios.get(this._visitsUrlFor(patient))
        .then((response) => {
          patient.visits = response.data
        })
        .catch((error) => {
          console.log(`Error fetching visits for ${patient.id}:`, error)
          patient.visits = []
        })
        .then(() => {
          resolve()
        })
    })
  }

  _patientsUrl () {
    return `${this.baseUrl}/patients`
  }

  _visitsUrlFor (patient) {
    return `${this._patientsUrl()}/${patient.id}/visits`
  }
}
