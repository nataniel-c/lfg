import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function TeamOrPass({ user }) {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>

      <Fab variant="extended" color="success">
        <NavigationIcon sx={{ mr: 1 }} />
        Game!
      </Fab>
      <Fab variant="extended" color="error">
        <NavigationIcon sx={{ mr: 1 }} />
        Pass
      </Fab>
    </Box>
  );
}