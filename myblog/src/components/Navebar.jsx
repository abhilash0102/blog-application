import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navebar = () => {
  return (
    <div>
        <AppBar color='warning' >
            <Toolbar>
            <Typography variant='h3' color={"none"} style={{ paddingLeft:"500px"}}>BLOG APP</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='success' size='small' style={{marginLeft:'200px'}} ><Link to={'/ho'} style={{textDecoration:'none',color:'white'}}>BLOG DETAILS</Link></Button>&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='secondary' size='small'><Link to={'/blgadd'} style={{textDecoration:'none',color:'white'}}>ADD BLOG LINK</Link> </Button>&nbsp;&nbsp;&nbsp;
            </Toolbar>
        </AppBar>
        
    </div>
  )
}

export default Navebar