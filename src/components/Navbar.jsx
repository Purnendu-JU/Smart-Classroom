import React from 'react';
import { AppBar, Toolbar, Typography,  IconButton, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Smart Classroom
        </Typography>
        <Avatar />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
