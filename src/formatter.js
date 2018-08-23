class Formatter {
  constructor (node) {
    this.node = node
  }

  printHa1csFor (patients) {
    this.node.innerHTML = '<ul>'
    patients.map((patient) => {
      this.node.innerHTML +=
        `<li>${patient.lastFirst()} - ${patient.average('ha1c')}</li>`
    })
    this.node.innerHTML += '</ul>'
  }
}
