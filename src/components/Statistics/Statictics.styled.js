import styled from 'styled-components';

export const StatisticsWrap = styled.section`
  margin-bottom: 40px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.2);
  width: 300px;
`;
export const Title = styled.h2`
  text-align: center;
  font-size: 26px;
  font-weight: 500;
  color: #272728;
  margin-bottom: 20px;
  padding: 40px 20px;
`;
export const StatList = styled.ul`
  font-size: 14px;
  color: white;
  display: flex;
  width: 100%;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 5px;
`;
export const Label = styled.span`
  font-size: 12px;
  margin-bottom: 4px;
`;
export const Percentage = styled.span`
  font-size: 16px;
`;
