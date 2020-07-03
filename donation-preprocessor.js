const _ = require('lodash')

class DonationPreprocessor {
  constructor() {
    this.count = 0
    this.donations = {}
  }

  process(donationReader) {
    let row
    this.annonceStartOfProcessing()
    while(row = donationReader.readrow()) {
      const donorId = row["Donor ID"]
      if(row["Donation Amount"]) {
        if(!_.has(this.donations, donorId)) {
          this.donations[donorId] = 0
        }
        this.donations[donorId] += parseInt(row["Donation Amount"], 10)
      }
      this.printProgress()
    }
    this.annonceEndOfProcessing()
    return this.donations
  }

  annonceStartOfProcessing() {
    this.startTime = new Date()
    console.log("Donations Pre-Processing Start ...")
  }

  printProgress() {
    this.count += 1
    if(this.count % 100000 === 0) {
      console.log(this.count, "Donation Records Processed | Time Elapsed:", new Date() - this.startTime, "milliseconds")
    }
  }

  annonceEndOfProcessing() {
    this.endTime = new Date()
    console.log("===========")
    console.log("Donations Pre-Processing Complete!")
    console.log("Donation Processing Time:", this.endTime - this.startTime, "milliseconds | Donors Found:", _.size(this.donations))
    console.log("===========")
    console.log()
  }
}

module.exports = DonationPreprocessor
