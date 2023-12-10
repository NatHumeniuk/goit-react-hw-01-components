import React from 'react';
import {
  Description,
  Quantity,
  Label,
  Location,
  Name,
  Photo,
  Stats,
  StatsItem,
  Tag,
  Wrapper,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return (
    <Wrapper>
      <Description>
        <Photo src={avatar} alt="User avatar" class="avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{formatNumberWithCommas(stats.followers)}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{formatNumberWithCommas(stats.views)}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{formatNumberWithCommas(stats.likes)}</Quantity>
        </StatsItem>
      </Stats>
    </Wrapper>
  );
};
