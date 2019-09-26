const { importSchema } = require('graphql-import');
const depthLimit = require('graphql-depth-limit');
// const merge = require('lodash.merge');

// const { resolvers: userResolvers } = require('./user');
// const resolvers = merge({}, userResolvers);
const schema = importSchema(`${__dirname}/schema.graphql`);

const todos = [
  { id: 1, userId: 1, description: 'Teach Graphql', completed: false },
  { id: 2, userId: 2, description: 'Practice Flying', completed: false },
  { id: 3, userId: 2, description: 'Be snarky', completed: true },
];
const users = [
  {
    id: 1,
    firstName: 'Daniel',
    lastName: 'St. Clair',
    email: 'test@email.com',
  },
  {
    id: 2,
    firstName: 'Rico',
    lastName: 'Callirgos',
    email: 'test@email.com',
    hobbies: ['coding'],
  },
  {
    id: 3,
    firstName: 'Mateus',
    lastName: 'Gomes',
    email: 'test@email.com',
    hobbies: ['coding'],
  },
  {
    id: 4,
    firstName: 'Daniel',
    lastName: 'Franco',
    email: 'test@email.com',
    hobbies: ['coding'],
  },
  {
    id: 5,
    firstName: 'Daniela',
    lastName: 'Barrientos',
    email: 'test@email.com',
    hobbies: ['coding'],
  },
  {
    id: 6,
    firstName: 'Emmett',
    lastName: 'Newton',
    email: 'test@email.com',
    hobbies: ['coding'],
  },
  {
    id: 7,
    firstName: 'Dylan',
    lastName: 'Ellison',
    email: 'test@email.com',
    hobbies: ['coding'],
  },
  {
    id: 8,
    firstName: 'Tom',
    lastName: 'Workman',
    email: 'test@email.com',
    hobbies: ['coding'],
  },
  {
    id: 9,
    firstName: 'Jacob',
    lastName: 'Bodkin',
    email: 'test@email.com',
    hobbies: ['coding'],
  },
  {
    id: 10,
    firstName: 'Misael',
    lastName: 'Calvillo',
    email: 'test@email.com',
    hobbies: ['coding'],
  },
];

const getUsers = () => users;
const getUserTodos = parent => todos.filter(todo => parent.id === todo.userId);
const getUser = (_, query) => {
  console.log(query);
  return users.find(user => user.id === query.userId);
};
const getTodos = () => todos;

const addTodo = (_, query) => {
  const { input } = query;
  console.log(input);
  todos.push(input);
  return {
    todo: input,
    success: true,
  };
};

const Query = { users: getUsers, todos: getTodos, user: getUser };
const Mutation = { addTodo };
const resolvers = {
  Query,
  Mutation,
  User: {
    qwerty123456: getUserTodos,
  },
  Todo: {
    user(parent) {
      return users.find(user => user.id === parent.userId);
    },
  },
};

module.exports = {
  typeDefs: [schema],
  resolvers,
  validationRules: [depthLimit(5)],
  tracing: true,
};
