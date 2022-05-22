let randomProfile = require('random-profile-generator');

function generateNames(num) {
  let arr = [];
  for(let i = 0; i < num; i++){
    let name = randomProfile.name();
    arr.push(name);
  } 
 return arr;
}
module.exports = generateNames;
