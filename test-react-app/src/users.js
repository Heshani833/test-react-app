import React from 'react';
import { Box } from '@mui/material';
import UserForm from './UserForm'; // Make sure this file exists and default-exports a component
import UsersTable from './UsersTable';


const usersData =[
  {
ID: 1,
Name: 'John Doe',
  Actions: 'Edit/Delete' // Placeholder for actions, you can replace with actual buttons later
  },
  {
ID: 2,
Name: 'Jane Smith',
  Actions: 'Edit/Delete'
  },
];


const Users = () => {
  return (
    <Box 
      sx={{width: 'calc(100% - 100px)', margin: 'auto',marginTop: '100px'}} >  {/* you also can use Grid or react fragmentations */}
      <UserForm />
      <UsersTable rows={usersData} />
    </Box>
  );
}

export default Users;