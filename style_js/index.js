const express = require('express');
const dotenv = require('dotenv');
const heapdump = require("heapdump");

const functions = require('./functions1');

dotenv.config();

const app = express();
const port = process.env.PORT;


const requests = new Map();
let index = 0;

// call func
console.log(`result call func ${functions.subtraction(1, 2)}`);

app.get('/', (req, res) => {
  // requests.set(index++, req);
  console.log(process.memoryUsage());
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});

heapdump.writeSnapshot(function(err, filename){
  console.log("Sample dump written to", filename);
});

