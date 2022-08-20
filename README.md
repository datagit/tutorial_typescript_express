#### guide typescript
https://blog.logrocket.com/how-to-set-up-node-typescript-express/
```js
// file functions.ts
export const subtraction = (a: number, b: number): number => {
  return a - b;
};

// ----------------------------------------------------------
// file index.ts
import { subtraction } from './functions';

console.log(`result functions.subtraction = ${subtraction(1, 2)}`);
```

#### guide javascript
https://www.digitalocean.com/community/tutorials/nodejs-export-and-import-modules
```js
// file functions1.js
function subtraction(a, b) {
  return a - b;
};

// v1
exports.subtraction = subtraction;

// v2
// module.exports = {
//   subtraction,
// }

// ------------------------------------------------------------
// file functions2.js
function sayName() { console.log(`Hello sayName`) }

// export default
module.exports = sayName;


// ------------------------------------------------------------
// file arthmetic.js
const PI = 3.1416;
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

const myObject = {
  PI,
  add,
  sub,
  mul,
  div,
}
exports.arthmetic = myObject;

// ------------------------------------------------------------
// file main_functions.js
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
```
##### understanding-memory-leaks-node-js-apps
https://blog.logrocket.com/understanding-memory-leaks-node-js-apps/