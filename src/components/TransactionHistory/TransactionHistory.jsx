import React from 'react';
import {
  Table,
  TableHead,
  CellHead,
  TableRow,
  TableCell,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <>
      <Table class="transaction-history">
        <TableHead>
          <tr>
            <CellHead>Type</CellHead>
            <CellHead>Amount</CellHead>
            <CellHead>Currency</CellHead>
          </tr>
        </TableHead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <TableRow key={id}>
                <TableCell>{type}</TableCell>
                <TableCell>{amount}</TableCell>
                <TableCell>{currency}</TableCell>
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
