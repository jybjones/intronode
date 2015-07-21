var fs = require('fs');
var csv = require('csv');

module.exports = function(fileName) {
  fs.createReadStream(fileName);
    .pipe(csv.parse())
    .pipe(process.stdout);
}
