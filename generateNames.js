let randomProfile = require('random-profile-generator');

function generateNames(a) {
  let arr = [];
  for(let i = 0; i < a; i++){
    let name = randomProfile.name();
    arr.push(name);
  } 
 return arr.join('\n');
}
module.exports = generateNames;
