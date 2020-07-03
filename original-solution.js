// donors: (id, state)

// donations: (donor_id, amount)
// `select state, sum(amount) from donors, donations where donations.donor_id = donors.id group by state`

// Solution
// ==============
// California, 800
// New York, 200
// Florida, 500
// ==============

const donors = [
  { id: 1, state: 'California' },
  { id: 2, state: 'New York' },
  { id: 3, state: 'California' },
  { id: 4, state: 'Florida' }
];

const donations = [
  { donor_id: 1, amount: 100 },
  { donor_id: 1, amount: 400 },
  { donor_id: 2, amount: 200 },
  { donor_id: 3, amount: 300 },
  { donor_id: 4, amount: 500 }
];

function getStateFinances(donors, donations) {
  const output = {}
  donors.forEach(donor => {
    let total = 0
    donations.forEach(donation => {
      if(donation.donor_id === donor.id) {
        total += donation.amount
      }
    })
    if(!output.hasOwnProperty(donor.state)) {
      output[donor.state] = 0
    }
    output[donor.state] += total
  });
  console.log(output)
} // O(p * q, where p is number of rows for donors and q is number of rows for donations)

getStateFinances(donors, donations)
