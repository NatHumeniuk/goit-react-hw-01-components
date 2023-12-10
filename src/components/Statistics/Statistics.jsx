import React from 'react';
import {
  StatisticsWrap,
  Title,
  StatList,
  StatsItem,
  Label,
  Percentage,
} from './Statictics.styled';

export const Statistics = ({ title, stats }) => {
  function getRandomHexColor() {
    const color = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
    return color;
  }

  return (
    <StatisticsWrap class="statistics">
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsItem
              key={id}
              style={{
                backgroundColor: getRandomHexColor(),
              }}
            >
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </StatsItem>
          );
        })}
      </StatList>
    </StatisticsWrap>
  );
};
