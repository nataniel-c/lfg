import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material'

export default function ProfilePic({ profilepic }) {
return (
    <Box sx={{ display: 'flex'}}>
            <CardMedia
              id='pfp'
              component="img"
              sx={{ width: 150, height: 150, objectFit: 'cover'}}
              image={user.pfp}
              alt="profile picture"
            />
              <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                Upload Profile Picture
                <VisuallyHiddenInput type="file" value={pfp} name='pfp'
                onChange={(event: React.FormEvent<HTMLInputElement>) => {
                  setFile(event.target.files[0]);
                }} />
              </Button>
            </Box>
    );
}