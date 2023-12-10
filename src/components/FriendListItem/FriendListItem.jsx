import React from 'react';
import { Status, Photo, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Status isOnline={isOnline}></Status>
      <Photo src={avatar} alt="User avatar" width="60" />
      <Name>{name}</Name>
    </>
  );
};
