// @flow
import React from 'react';

type UserCardPropsType = {|
  firstName: string,
  lastName: string,
|};

export const UserCard = (props: UserCardPropsType) => (
  <p>
    {props.firstName} {props.lastName} {props.email} {props.hobbies}
  </p>
);
