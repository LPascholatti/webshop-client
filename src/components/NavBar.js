import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'

const NavBar = () => {
  return (
    <div className='navBar'>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='h2' color='inherit'>
            Buy and Sell App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar;