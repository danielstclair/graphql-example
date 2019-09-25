const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const schema = require('./schema');

const app = express();
const server = new ApolloServer(schema);
const port = 5000;
server.applyMiddleware({ app });

app.listen({ port }, () =>
  console.log(`Server ready. go to localhost:${port}${server.graphqlPath}`)
);
