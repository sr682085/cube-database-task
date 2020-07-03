# CubeDev Database Task
This is a monorepo for the task provided by CubeDev

## Prerequisites
- NodeJS (> version 10.16.0)

## Setup
- `npm install`

## Run
- `npm start`

## Solutions
### 1. Original Solution
- File Name: `original-solution.js`
- Time Complexity: `O(p * q)`, where p is the number of rows for table1, and q is the number of columns for table2
- Purpose: Aims to provide a very simple rudimentary solution via brute force solution.

### 2. Optimized Solution
- Main File Name: `index.js`
- Time Complexity: `O(p + q)`, where p is the number of rows for table1, and q is the number of columns for table2
- Working: Preprocesses the data for Donations first and keeps them in a hashmap, then processes the donors, and calculates the final output.
- Average Time to Run on Sample Dataset: ~22-25 milliseconds
