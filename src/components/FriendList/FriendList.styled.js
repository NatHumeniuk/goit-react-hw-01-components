import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  margin-bottom: 40px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  background-color: white;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  transition: transform 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.15);
  }
`;
