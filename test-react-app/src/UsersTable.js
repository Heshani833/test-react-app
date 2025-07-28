import { Paper, Tab, Table, TableCell, TableContainer, TableHead } from '@mui/material'
import React from 'react'

const UsersTable = (props) => {
  return (
<TableContainer component={Paper}>
    <table>
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Actions</TableCell>          //include edit and delete buttons
            </TableRow>
        </TableHead>
        <TableBody>

        </TableBody>
    </table>
</TableContainer>

  )
}

export default UsersTable