const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first,second)

writeFileSync('./content/created-file.txt',`the result of adding the first and second files are : ${first},${second}` ,'')

const result  = readFileSync('./content/created-file.txt','utf8')
console.log(result)