const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');

const schema = require('./schema');

const app = express();
const server = new ApolloServer(schema);
const port = 5000;
server.applyMiddleware({ app });
app.use(cors());

app.listen({ port }, () =>
  console.log(`Server ready. go to localhost:${port}${server.graphqlPath}`)
);
