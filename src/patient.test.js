import Patient from './patient'
// const Patient = require('./patient.js')
console.log(Patient)

describe("Patient", () => {
  describe("#latestVisit()", () => {
    test("it returns the latest visit", () => {
      visits = [
        { date: "20160213" },
        { date: "20170213" },
        { date: "20140213" },
      ]
      let patient = new Patient
      patient.visits = visits

      expect(patient.latestVisit()).toBe(visits[1])
    })
  })
})
