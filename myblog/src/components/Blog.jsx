import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Blog = () => {
    
  return (
    <div style={{ paddingTop:"80px"}}>
        <Typography variant='h4'>
            <h4>BLOG FORM</h4>
        </Typography>
        <br/>
        <TextField label='Blog Name' variant='outlined' /><br/><br/>
        <TextField label='Description' variant='outlined'  /><br/><br/>
        <TextField label='Author Name' variant='outlined' /><br/><br/>
        
        <Button variant='contained'color='secondary' >submit</Button>
    </div>
  )
}

export default Blog