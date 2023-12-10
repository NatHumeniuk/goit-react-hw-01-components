import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 40px;
`;
export const Description = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  border-bottom: solid 1px #babec6;
`;
export const Photo = styled.img`
  width: 100px;
  border-radius: 50%;
  background-color: forestgreen;
  margin-bottom: 40px;
`;
export const Name = styled.p`
  font-size: 26px;
  font-weight: 500;
  color: #272728;
  margin-bottom: 16px;
`;
export const Tag = styled.p`
  font-size: 18px;
  color: #7e7f81;
  margin-bottom: 16px;
`;
export const Location = styled.p`
  font-size: 18px;
  color: #7e7f81;
`;
export const Stats = styled.ul`
  font-size: 18px;
  color: #454647;
  background-color: #eef2f9;
  display: flex;
  width: 100%;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: solid 1px #babec6;
  width: 100%;
  padding: 10px 5px;
`;
export const Label = styled.span`
  font-size: 16px;
  color: #7e7f81;
  margin-bottom: 4px;
`;
export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #333334;
`;
