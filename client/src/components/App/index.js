import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

import {UserList} from '../UserList';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">Hello world</div>
      <UserList />
    </ApolloProvider>
  );
}

export default App;
