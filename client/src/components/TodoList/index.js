import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_TODOS = gql`
  {
    todos {
      id
      description
      completed
      user {
        firstName
        lastName
        email
      }
    }
  }
`;

export const TodoList = () => {
  const { loading, error, data } = useQuery(GET_TODOS);
  if (loading) return 'Loading...';
  if (error) {
    console.error(error);
    return <p>Error :(</p>;
  }
  return data.todos.map(todo => {
    return (
      <ul key={todo.id}>
        <li>{todo.id}</li>
        <li>{todo.description}</li>
        <li>{`${todo.completed}`}</li>
      </ul>
    );
  });
};
