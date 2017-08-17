const fs = require('fs')

const read = (path) => JSON.parse(fs.readFileSync(path).toString())

const write = (path, obj) => fs.writeFileSync(path, JSON.stringify(obj))

module.exports = { read, write }
