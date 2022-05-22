const generateNames = require('./generateNames');
const getRandomInteger = require('./getRandomInteger')
const writeResults = require('./writeResults')
const num = process.argv[2]|| getRandomInteger();
const numNames = generateNames(num);

writeResults(num, numNames);


















