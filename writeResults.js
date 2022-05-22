const fs = require('fs');

function writeResults(num, arr) {
  if (!fs.existsSync('./results/')) { 
    fs.mkdirSync('./results/')
} 
  fs.writeFileSync(`./results/${num}-names.txt`, arr.join('\n'));
}

module.exports = writeResults;

