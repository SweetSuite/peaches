import dotenv from 'dotenv';
import { GraphQLServer } from 'graphql-yoga';

import resolvers from './graphql/resolvers';
import typeDefs from './graphql/types.gql';

dotenv.config();
const { PORT } = process.env;

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start({ port: PORT }, () => console.log(`> Listening on port ${PORT}`));
