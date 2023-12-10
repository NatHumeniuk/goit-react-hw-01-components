import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import React from 'react';
import { Wrapper, List, Item } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Wrapper>
      <List>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <Item key={id} class="item">
              <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
            </Item>
          );
        })}
      </List>
    </Wrapper>
  );
};
