import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import Avatar from "@mui/material/Avatar"

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function ProfilePic({ edit, user }) {
  if (!user.profilePic) {
    var profilePic = 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg';
  } else {
    var profilePic = user.profilePic;
  }
  const [pfp, setPfp] = React.useState(profilePic);
  const handleChange = (e) => {
    setPfp(null);
    const pfpURL = URL.createObjectURL(e.target.files[0])
    setPfp(pfpURL);
    console.log(pfp)
    user.profilePic = pfp;
    console.log(user.profilePic)
  }

  
  return !edit ? (
    <Box sx={{ display: 'flex'}}>
      <Avatar
        id='pfp'
        sx={{ width: 150, height: 150, objectFit: 'cover'}}
        src={user.profilePic}
        alt="profile picture"
      />
    </Box>
  ) : (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Avatar 
        id='pfp'
        sx={{ width: 150, height: 150, objectFit: 'cover'}}
        src={pfp}
        alt="profile picture"
      />
        <Button size="small" component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{ alignSelf: "center" , fontSize: '10px', m: 2 }}>
          Upload Profile Picture
          <VisuallyHiddenInput type="file" name='pfp'
            onChange={handleChange} />
        </Button>
    </Box>
  );
}