import dotenv from 'dotenv';
import express from 'express';
import expressGraphQL from 'express-graphql';
import schema from './graphql';

dotenv.config();
const { PORT, DB_NAME, DB_HOST, DB_USER, DB_PASSWORD } = process.env;

const app = express();

app.use(
  '/',
  expressGraphQL({
    schema,
    graphiql: true,
  }),
);

app.listen(PORT, () => console.log(`> Listening on port ${PORT}`));
