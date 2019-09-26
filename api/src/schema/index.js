const { importSchema } = require('graphql-import');
const depthLimit = require('graphql-depth-limit');
// const merge = require('lodash.merge');

// const { resolvers: userResolvers } = require('./user');
// const resolvers = merge({}, userResolvers);
const schema = importSchema(`${__dirname}/schema.graphql`);

const users = [
  { id: 1, firstName: 'Daniel', lastName: 'St. Clair' },
  { id: 2, firstName: 'Rico', lastName: 'Callirgos' },
  { id: 3, firstName: 'Mateus', lastName: 'Gomes' },
  { id: 4, firstName: 'Daniel', lastName: 'Franco' },
  { id: 5, firstName: 'Daniela', lastName: 'Barrientos' },
  { id: 6, firstName: 'Emmett', lastName: 'Newton' },
  { id: 7, firstName: 'Dylan', lastName: 'Ellison' },
  { id: 8, firstName: 'Tom', lastName: 'Workman' },
  { id: 9, firstName: 'Jacob', lastName: 'Bodkin' },
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
