// https://www.digitalocean.com/community/tutorials/nodejs-export-and-import-modules

// v1: commonJS
const my  = require('./functions1');
console.dir(module, { depth: null });
console.log(my)
console.log(`result ${my.subtraction(1, 2)}`)

const myObject = require('./arthmetic');
// console.log(myObject)
console.log(`result ${myObject.arthmetic.PI}`)

const myDefault = require('./functions2');
console.log(`result ${myDefault()}`)
