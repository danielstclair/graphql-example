const { importSchema } = require('graphql-import');
const depthLimit = require('graphql-depth-limit');
// const merge = require('lodash.merge');

// const { resolvers: userResolvers } = require('./user');
// const resolvers = merge({}, userResolvers);
const schema = importSchema(`${__dirname}/schema.graphql`);

const users = [
  { id: 1, name: 'St. Clair' },
  { id: 2, name: 'Rico' },
  { id: 3, name: 'Mateus' },
  { id: 4, name: 'Franco' },
  { id: 5, name: 'Daniela' },
  { id: 6, name: 'Emmett' },
  { id: 7, name: 'Dylan' },
  { id: 8, name: 'Tom' },
  { id: 9, name: 'Jacob' },
];

const getUsers = () => users;

const Query = { getUsers };
const resolvers = { Query };

module.exports = {
  typeDefs: [schema],
  resolvers,
  validationRules: [depthLimit(5)],
  tracing: true,
};
