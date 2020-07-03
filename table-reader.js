const _ = require('lodash')
const lineByLine = require('n-readlines')

class TableReader {
  constructor(filePath) {
    this.reader = new lineByLine(filePath)
    this.restart()
  }

  readline() {
    return this.reader.next()
    
  }
  tokenize(buffer) {
    return buffer.toString().split(",")
  }

  readrow() {
    let row = this.readline()
    return row ? _.zipObject(this.columns, this.tokenize(row)) : row
  }

  restart() {
    this.reader.reset()
    this.columns = this.tokenize(this.readline())
  }
}

module.exports = TableReader
