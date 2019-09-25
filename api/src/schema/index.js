const merge = require('lodash.merge');
const { importSchema } = require('graphql-import');
const depthLimit = require('graphql-depth-limit');

const { resolvers: userResolvers } = require('./user');

const schema = importSchema(`${__dirname}/schema.graphql`);

const resolvers = merge({}, userResolvers);

module.exports = {
  typeDefs: [schema],
  resolvers,
  validationRules: [depthLimit(5)],
  tracing: true,
};
