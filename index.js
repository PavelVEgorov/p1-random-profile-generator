let randomProfile = require('random-profile-generator');

function generateNames(a) {
  let arr = [];
  for(let i = 0; i < a; i++){
    let name = randomProfile.name();
    arr.push(name);
  } 
 return arr;
}
let names = generateNames(3);
console.log(names);


