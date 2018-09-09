import dotenv from 'dotenv';
import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './graphql';

dotenv.config();
const { PORT } = process.env;

const app = express();

app.use(
  '/',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen(PORT, () => console.log(`> Listening on port ${PORT}`));
