import React from 'react';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  margin-right: auto;
`;

export const App = () => {
  return (
    <Container>
      <ProfileContainer>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        ></Profile>
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
      </ProfileContainer>

      <TransactionHistory items={transactions} />
    </Container>
  );
};
