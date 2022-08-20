import express, { Express, Request, Response }  from 'express';
import dotenv from 'dotenv';

import { subtraction, myObject } from './functions';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => {
  console.log(`result subtraction = ${subtraction(1, 2)}`);
  console.log(`result myObject.PI = ${myObject.PI}`);
  console.log(`result myObject.sayName = ${myObject.sayName()}`);
  res.send('Express + Typescript Server');
});

app.listen(port, () => {
  console.log('my run listen');
  console.log(`[server]: Server is running at http://localhost:${port}`);
});