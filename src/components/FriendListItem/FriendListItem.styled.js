import styled from 'styled-components';

export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  margin-right: 20px;
`;
export const Photo = styled.img`
  border-radius: 10px;
  background-color: #c3ecaf;
  padding: 5px;
  margin-right: 20px;
`;
export const Name = styled.p`
  font-size: 26px;
  font-weight: 500;
  color: #272728;
`;
