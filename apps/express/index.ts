import express from 'express';
import bodyParser from 'body-parser';
import * as routes from './routes';

const app = express();
const port = 3000;

// Init
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Setup global middlewares
app.use(bodyParser.json())

// Setup routes
Object.entries(routes).forEach(([scope, router]) => {
  app.use(`/${scope}`, router);
});

