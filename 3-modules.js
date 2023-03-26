// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// const {john,peter} = require('./4-names');
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-granade');
// console.log(data);

sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);