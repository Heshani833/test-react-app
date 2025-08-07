import React, { use } from 'react'
import { Grid, Input, Typography, Button } from '@mui/material'
import { useState } from 'react';


const UserForm = (props) => {

  const [id, setId] = useState('');
  const [name, setName] = useState('');

  return (
    <Grid
      container
      spacing={2}
      sx={{ 
        backgroundColor: '#ffffff',
        marginBottom: '20px',
        display: 'block', 
        padding: '20px',
        borderRadius: '8px',
      }}
    >
      <Grid item xs={12}>
        <Typography component={'h1'} sx={{ color: '#000000', fontWeight: 'bold'}}>User Form</Typography>
      </Grid>
  <Grid item xs={12}  sm={6} sx={{ display:'flex',alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <Typography
          component={'label'}
          htmlFor="ID"
          sx={{
            color: '#000000',
            fontSize: '16px',
            width: '80px',
          }}
        >
          ID
        </Typography>
        <Input
          type="text"
          id="ID"
          name="ID"
          sx={{ flex: 1 }}
          value={id}
          onChange={e =>{setId(e.target.value)}}
        />
      </Grid>

      <Grid item xs={12}  sm={6} sx={{ display:'flex', alignItems: 'center', gap: '10px' }}>
        <Typography
          component={'label'}
          htmlFor="Name"
          sx={{
            color: '#000000',
            marginRight: '10px',
            fontSize: '16px',
            display: 'block',
          }}
        >
          Name
        </Typography>
        <Input
          type="text"
          id="Name"
          name="Name"
          sx={{ flex: 1 }}
          value={name}
          onChange={e =>{setName(e.target.value)}}
        />
      </Grid>
      <Grid item xs={12} sx={{ display: 'block', marginTop: '20px' }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#0d30dcff',
            '&:hover': {
              backgroundColor: '#0773d7ff',
            },
          }}
        >
          ADD
        </Button>
      </Grid>
    </Grid>
  )
}

export default UserForm