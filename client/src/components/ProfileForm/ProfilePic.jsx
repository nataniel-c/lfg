import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

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

export default function ProfilePic(edit, profilePic) {
  const [pfp, setPfp] = useState('');

  const handleChange = (e) => {
    setPfp(e.target.files[0]);
  }

  return !edit ? (
    <Box sx={{ display: 'flex'}}>
      <CardMedia
        id='pfp'
        component="img"
        sx={{ width: 150, height: 150, objectFit: 'cover'}}
        image={profilePic}
        alt="profile picture"
      />
    </Box>
  ) : (
    <Box sx={{ display: 'flex'}}>
      <CardMedia
        id='pfp'
        component="img"
        sx={{ width: 150, height: 150, objectFit: 'cover'}}
        image={props.pfp}
        alt="profile picture"
      />
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
          Upload Profile Picture
          <VisuallyHiddenInput type="file" value={pfp} name='pfp'
            onChange={handleChange} />
        </Button>
    </Box>
  );
}