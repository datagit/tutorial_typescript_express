const express = require('express');
const dotenv = require('dotenv');

const functions = require('./functions1');

dotenv.config();

const app = express();
const port = process.env.PORT;

// call func
console.log(`result call func ${functions.subtraction(1, 2)}`);

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
