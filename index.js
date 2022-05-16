let randomProfile = require('random-profile-generator');

function generateNames(a) {
  let arr = [];
  for(let i = 0; i < a; i++){
    let name = randomProfile.name();
    arr.push(name);
  } 
 return arr.join('\n');
}
let names = generateNames(process.argv[2]);
console.log(names);

const fs = require('fs');
fs.writeFileSync('results/3-names.txt', names);



