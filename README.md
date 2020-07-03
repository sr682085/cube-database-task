# CubeDev Database Task
This is a monorepo for the database task given by CubeDev

## NOTE
- Sample datasets in this Github Repository is trimmed.
- The reason for this is that Github does not support pushing files more than 100 MBs in size.
- The average time with optimized approach is for Original files that can be downloaded from [Kaggle](https://www.kaggle.com/hanselhansel/donorschoose)
- File to Download: Donations.csv, Donors.csv
- Save Files inside dataset folder: dataset/Donations.csv, dataset/Donors.csv
- Change DONOR_DATASET_FILE, DONATION_DATASET_FILE in `constants.js` with `dataset/Donors.csv` and `dataset/Donations.csv` respectively. 
### Steps to download dataset(through CLI)
- `pip install kaggle`
- Create a API key on Kaggle, and save `kaggle.json` in `~/.kaggle/kaggle.json`
- `chmod 600 ~/.kaggle/kaggle.json`
- `kaggle datasets download -f Donors.csv hanselhansel/donorschoose`
- `unzip $(ls | grep ".zip")`
- `mv Donors.csv dataset/`
- `rm $(ls | grep ".zip")`
- `kaggle datasets download -f Donations.csv hanselhansel/donorschoose`
- `unzip $(ls | grep ".zip")`
- `mv Donations.csv dataset/`
- `rm $(ls | grep ".zip")`
- Change DONOR_DATASET_FILE, DONATION_DATASET_FILE in `constants.js` with `dataset/Donors.csv` and `dataset/Donations.csv` respectively. 

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
- Average Time to Run on Sample Dataset: ~22-25 seconds
- Average Time to Run on (Trimmed) Sample Dataset: ~7-8 seconds
