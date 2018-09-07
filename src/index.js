import dotenv from 'dotenv';
import express from 'express';
import expressGraphQL from 'express-graphql';

import schema from './models';

dotenv.config();
const { PORT } = process.env;

const app = express();

app.use(
  '/',
  expressGraphQL({
    schema,
    graphiql: true,
  }),
);

app.listen(PORT, () => console.log(`> Listening on port ${PORT}`));
