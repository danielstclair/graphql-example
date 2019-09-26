import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { UserCard } from '../UserCard';

const GET_USERS = gql`
  {
    getUsers {
      id
      firstName
      lastName
    }
  }
`;

export const UserList = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return 'Loading...';
  if (error) {
    console.error(error);
    return <p>Error :(</p>;
  }
  return data.getUsers.map(user => {
    return <UserCard {...user} key={user.id} />;
  });
};
