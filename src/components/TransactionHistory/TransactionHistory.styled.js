import styled from 'styled-components';

export const Table = styled.table`
  width: 600px;
  border-collapse: separate;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const TableHead = styled.thead`
  background-color: #4caf50;
  color: white;
`;
export const CellHead = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;
export const TableCell = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: white;
  }

  &:hover {
    background-color: #ddd;
  }
`;
