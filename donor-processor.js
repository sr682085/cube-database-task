const _ = require('lodash')

class DonorProcessor {
  constructor() {
    this.count = 0
    this.stateDonations = {}
  }

  calculateStateDonations(donorReader, donations) {
    let row
    this.annonceStartOfProcessing()
    while (row = donorReader.readrow()) {
      const state = row["Donor State"]
      if (!_.has(this.stateDonations, state)) {
        this.stateDonations[state] = 0
      }
      const donorId = row["Donor ID"]
      if (_.has(donations, donorId)) {
        this.stateDonations[state] += donations[donorId]
      }
      this.printProgress()
    }
    this.annonceEndOfProcessing()
    return this.stateDonations
  }

  annonceStartOfProcessing() {
    this.startTime = new Date()
    console.log("Calculating state-wise donations ...")
  }

  printProgress() {
    this.count += 1
    if (this.count % 100000 === 0) {
      console.log(this.count, "Donor Records Processed | Time Elapsed:", new Date() - this.startTime, "milliseconds")
    }
  }

  annonceEndOfProcessing() {
    this.endTime = new Date()
    console.log("===========")
    console.log("State wise donations calculated!")
    console.log("Donor Processing Time:", this.endTime - this.startTime, "milliseconds | Total States Donated:", _.size(this.stateDonations))
    console.log("===========")
    console.log()
  }
}

module.exports = DonorProcessor
