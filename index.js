const _ = require("lodash")
const TableReader = require('./table-reader')
const DonorProcessor = require('./donor-processor.js')
const DonationPreprocessor = require('./donation-preprocessor')

const constants = require('./constants')
const { sortByValue } = require('./util')

// Create Line by Line File Stream Reader
const donorReader = new TableReader(constants.DONOR_DATASET_FILE)
const donationReader = new TableReader(constants.DONATION_DATASET_FILE)

// Preprocess Donations
const dp = new DonationPreprocessor()
const donations = dp.process(donationReader)

// Calculate State wise Donations
const sp = new DonorProcessor()
const stateDonations = sp.calculateStateDonations(donorReader, donations)


// Output Donations from States
const sortedStateDonations = sortByValue(
  stateDonations,
  constants.SORTING_ORDER.DESC,
  constants.STATE_HEADING,
  constants.DONATION_HEADING
)
console.log("Donations collected(State-wise Tally)")
console.table(sortedStateDonations)

// Analysis
console.log("\n===========")
console.log("Total Processing Time:", sp.endTime - dp.startTime, "milliseconds")
console.log("Total Donations:", _.sum(_.values(stateDonations)), "$")
console.log("===========")
