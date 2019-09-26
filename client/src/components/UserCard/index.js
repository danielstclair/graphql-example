// @flow
import React from 'react';

type UserCardPropsType = {|
  firstName: string,
  lastName: string,
|};

export const UserCard = (props: UserCardPropsType) => (
  <p>
    {props.firstName} {props.lastName}
  </p>
);
