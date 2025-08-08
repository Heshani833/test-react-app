import React from 'react';
import { Box } from '@mui/material';
import UserForm from './UserForm'; // Make sure this file exists and default-exports a component
import UsersTable from './UsersTable';
import Axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';





const Users = () => {

  const [usersData, setUsersData] = useState([]);

useEffect(() => {
  getUsersData();
}, []);


  const getUsersData = () => {
 Axios.get('http://localhost:3001/users')
       .then(response => {
        console.log(response.data.response);
        
  })
}


  return (
    <Box 
      sx={{width: 'calc(100% - 100px)', margin: 'auto',marginTop: '100px'}} >  {/* you also can use Grid or react fragmentations */}
      <UserForm />
      <UsersTable rows={usersData} />
    </Box>
  );
}

export default Users;