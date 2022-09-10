const express = require('express');
const dotenv = require('dotenv');

const {
  HealthcheckerSimpleCheck,
  HealthcheckerDetailedCheck,
} = require('nodejs-health-checker/dist/healthchecker/healthchecker');
const { HealthTypes } = require('nodejs-health-checker/dist/interfaces/types');

const functions = require('./functions1');

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// call func
console.log(`result call func ${functions.subtraction(1, 2)}`);

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

// -----------------------------------------------------------
app.get('/health-check/liveness', (req, res) => {
  res.json(HealthcheckerSimpleCheck());
});

console.log(HealthcheckerSimpleCheck());

const { healthCheck } = require('@mongodb-helpers/health-check');
const { MongoClient } = require('mongodb');

const customCheckMongoDB = async () => {
  const MONGODB_URL =
    'mongodb://dbDevConnect:Q8K7MyzDEEeIzKvG@sha-dev-shard-00-00-sdv55.mongodb.net:27017,sha-dev-shard-00-02-sdv55.mongodb.net:27017/shaDev?retryWrites=true&ssl=true&w=majority&replicaSet=sha-dev-shard-0&authSource=admin';
  const client = await MongoClient.connect(MONGODB_URL);
  const status = await healthCheck(client);
  if (status === 'Connected') {
    return {
      status: true,
    };
  }
  if (status === 'Disconnected') {
    // throw Error('not working');
    return {
      status: false,
    };
  }
};

// 'Connected' | 'Disconnected'
// MonogoDBorMongooseClient:
// - mongodb: const client = await MongoClient.connect(MONGODB_URL)
// - mongoose: const client = await mongoose.connect(MONGODB_URL)
const myfunc = () => {
  throw Error('not working');
  // return {
  //   status: true,
  // };
};

app.get('/health-check/readiness', async (req, res) => {
  let result = await HealthcheckerDetailedCheck({
    name: 'example',
    version: 'v1.0.0',
    integrations: [
      {
        type: HealthTypes.Web,
        name: 'A simple api integration check',
        host: 'https://github.com/status',
      },
      {
        type: HealthTypes.Custom,
        name: 'my custom integration',
        host: 'localhost',
        customCheckerFunction: myfunc,
      },
      {
        type: HealthTypes.Custom,
        name: 'custom check mongodb',
        host: 'localhost',
        customCheckerFunction: customCheckMongoDB,
      },
    ],
  });
  res.json(result);
});
// ------------------------------------------------------------------

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
