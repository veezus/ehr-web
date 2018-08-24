const Patient = require('./patient')

describe("Patient", () => {
  describe("#average()", () => {
    test("it returns the average of the provided key", () => {
      visits = [
        { ha1c: 1 },
        { ha1c: 2 },
        { ha1c: 3 },
        { ha1c: 4 },
      ]
      let patient = new Patient
      patient.visits = visits

      expect(patient.average('ha1c')).toEqual(2.5)
    })
  })
})
