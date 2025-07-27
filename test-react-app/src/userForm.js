import React from 'react'
import { Grid,Input, Typography } from '@mui/material'

const userForm = (props) => {
  return (
    <Grid
        container
        spacing={2}
        sx={{ 
          backgroundColor: '#ffffff',
          marginBottom: '20px',
          disply: 'block', 
          }}

          >
            <Grid item xs={12}>
              <Typography component={'h1'} sx={{ color: '#000000'}}>User Form</Typography>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display:'flex'}}>
              <Typography
                component={'label'}
                htmlFor="ID"
                sx={{
                  color: '#000000',
                  marginRight: '10px',
                  fontSize: '16px',
                  display: 'block',
                  fontWeight: 'bold'}}
              >
                
                ID</Typography>

                <Input
                  type="number"
                  id="ID"
                  name="ID"
                  sx={{ width: '100%' }}
                  value={''}
                  onChange={e =>{}}
                />
            </Grid>
            <button sx={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '10px 15px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#45a049',
                
              },
            }}>
              ADD
            </button>
          </Grid>
  )
}

export default userForm