const name = require('./4-names')
const {sayHi} = require('./5-utils')
const data = require('./6-alternateflavors')
require('./7-mindgrenade')

console.log(data.items[0]) //prints item1
console.log(data.singlePerson.name) // prints john

sayHi(name.name) // prints john
sayHi(name.name1) // prints doe