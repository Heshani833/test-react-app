import React from 'react'
import { Grid, Input, Typography, Button } from '@mui/material'

const UserForm = (props) => {
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
  <Grid item xs={12}  sm={6} sx={{ display:'flex'}}>
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
          sx={{ width: '10%' }}
          value={''}
          onChange={e =>{}}
        />
      </Grid>

      <Grid item xs={12}  sm={6} sx={{ display:'flex'}}>
        <Typography
          component={'label'}
          htmlFor="ID"
          sx={{
            color: '#000000',
            marginRight: '10px',
            fontSize: '16px',
            display: 'block',
          }}
        >
          ID
        </Typography>
        <Input
          type="number"
          id="ID"
          name="ID"
          sx={{ width: '10%' }}
          value={''}
          onChange={e =>{}}
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