import { Paper, Table, TableCell, TableContainer, TableHead, TableBody, TableRow } from '@mui/material';
import React from 'react';

const UsersTable = ({ rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.length > 0 ? rows.map(row => (
              <TableRow key={row.ID} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{row.Name}</TableCell>
                <TableCell>{row.ID}</TableCell>
                <TableCell>
                  <button style={{ marginRight: '10px' }} onClick={() => { }}>Update</button>
                  <button onClick={() => { }}>Delete</button>
                </TableCell>
              </TableRow>
            )) : (
              <TableRow>
                <TableCell colSpan={3}>No Data</TableCell>
              </TableRow>
            )
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
