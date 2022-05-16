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

function getRandomInteger() {
  return Math.floor(Math.random() * 20) + 1;
}

let randomInteger =  generateNames(getRandomInteger());
// console.log(randomInteger);


const fs = require('fs');

if (process.argv[2] == undefined){
  fs.writeFileSync('results/3-names.txt', randomInteger);
} else fs.writeFileSync('results/3-names.txt', names);















