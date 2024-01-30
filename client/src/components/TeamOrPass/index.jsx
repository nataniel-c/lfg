import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Navigate } from 'react-router-dom';

export default function TeamOrPass({ me, them }) {

  function handleGame() {
    console.log(me.friends)
    console.log(them)
    me.friends.push(them.username);
    window.location.href = "/";
  }

  function handlePass() { 
    window.location.href = "/";
  }

  return (
    <Box sx={{ '& > :not(style)': { m: 2 } }}>

      <Fab variant="extended" color="success" onClick={handleGame}>
        <NavigationIcon sx={{ mr: 1 }} />
        Game!
      </Fab>
      <Fab variant="extended" color="error" onClick={handlePass}>
        <NavigationIcon sx={{ mr: 1 }} />
        Pass
      </Fab>
    </Box>
  );
}