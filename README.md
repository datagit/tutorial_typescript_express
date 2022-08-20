#### guide typescript
https://blog.logrocket.com/how-to-set-up-node-typescript-express/
https://blog.logrocket.com/definitive-guide-typing-functions-typescript/
```js
// file functions.ts
export const subtraction = (a: number, b: number): number => {
  return a - b;
};

// ----------------------------------------------------------
// file index.ts
import { subtraction } from './functions';

console.log(`result functions.subtraction = ${subtraction(1, 2)}`);

// https://github.com/datagit/typescript-express-starter
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
##### typescript-with-test-driven-development
https://dev.to/this-is-learning/weighted-random-generator-in-typescript-with-test-driven-development--hlb?signin=true
```js
const picker = new RandomPicker(items);

const result = picker.pick();
const results = picker.pickMany(3);

// coding
// 1. typing
// 2. core class define some methods
// 3. testing some methods
// 4. run testing some methods
// 5. implement some methods
// 6. run testing some methods

// testing
npm run test

> express-typescript@1.0.0 test
> jest --config jestconfig.json

 PASS  src/ddt/RandomPicker.test.ts
  RandomPicker
    ✓ should be created with a list of items with their weight (1 ms)
    ✓ should be implement (11 ms)

-----------------|---------|----------|---------|---------|-------------------
File             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------------|---------|----------|---------|---------|-------------------
All files        |     100 |      100 |     100 |     100 |                   
 RandomPicker.ts |     100 |      100 |     100 |     100 |                   
-----------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.804 s, estimated 2 s
Ran all test suites.
```