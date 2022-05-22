function getRandomInteger() {
    return Math.floor(Math.random() * 20) + 1;
  }

  // let randomInteger = generateNames(getRandomInteger())
  // if (process.argv[2] == undefined){
  //   fs.writeFileSync('results/3-names.txt', randomInteger);
  // } else fs.writeFileSync('results/3-names.txt', names);

module.exports = getRandomInteger;
