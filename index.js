// 1. Функция generateNames
// let randomProfile = require('random-profile-generator');

// function generateNames(a) {
//   let arr = [];
//   for(let i = 0; i < a; i++){
//     let name = randomProfile.name();
//     arr.push(name);
//   } 
//  return arr.join('\n');
// }
// console.log(generateNames(5))
const generateNames = require('./generateNames');

// 2. process.argv
let names = generateNames(process.argv[2]);
// console.log(names)

// 3. Функция writeResults
const fs = require('fs');
fs.writeFileSync('results/3-names.txt', names);

// 4. Функция getRandomInteger
// function getRandomInteger() {
//   return Math.floor(Math.random() * 20) + 1;
// }
// console.log(getRandomInteger())
const getRandomInteger = require('./getRandomInteger')

let randomInteger = generateNames(getRandomInteger())
if (process.argv[2] == undefined){
  fs.writeFileSync('results/3-names.txt', randomInteger);
} else fs.writeFileSync('results/3-names.txt', names);

















