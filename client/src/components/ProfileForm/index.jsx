// MUI imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Alert from '@mui/material/Alert';

import { useTheme } from '@mui/material/styles';

// Database manipulation imports
import { useMutation } from '@apollo/client';
// import { UPDATE_USER } from '../utils/mutations';
// import { ADD_USER } from '../utils/mutations';

// React imports
import * as React from 'react';
import { Link } from 'react-router-dom';

//import smaller components from our component directory
import ProfilePic from './ProfilePic'
import GameSchedule from './GameSchedule'
import timeslots from '../../helpers/timeslots'

// Properties that are defined in the profile: 
// profile picture, gamertag, bio, preferred console, gaming schedule, country of origin
function ProfileForm(props) {
  const [profileState, setProfileState] = React.useState({
    pfp: 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg',
    gamertag: '',
    bio: '',
    platform: {
      playstation: false,
      xbox: false,
      nintendo: false,
      pc: false,
    },
    schedule: [],
    country: ''
  });

  const [changeUser, { error, data }] = useMutation(UPDATE_USER);

  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };    

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      gamerTag: gamerTag,

    });

  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !props.edit ? (
    <div>
      <Card sx={{ display: 'flex' }}>
        <FormGroup>
            <CardMedia
              id='pfp'
              component="img"
              sx={{ width: 150, height: 150, objectFit: 'cover'}}
              image={user.pfp}
              alt="profile picture"
            />
              <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                Upload Profile Picture
                <VisuallyHiddenInput type="file" value={user.pfp} name='pfp'/>
              </Button>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                <Box>
                  <TextField
                    required
                    id="outlined-required"
                    label="Gamer Tag"
                    value={gamerTag}
                    defaultValue="example: gamertag123"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setGamerTag(event.target.value);
                    }}
                  />                  
                  <TextField
                    required
                    id="outlined-required"
                    label="Profile Bio"
                    value={bio}
                    defaultValue="maximum 300 characters"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setBio(event.target.value);
                    }}
                  />
                  <FormLabel component="legend">Preferred Console(s):</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox checked={playstation} onChange={handleChange} name="playstation" />
                      }
                      label="Playstation"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={xbox} onChange={handleChange} name="xbox" />
                      }
                      label="Xbox"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={Nintendo} onChange={handleChange} name="nintendo" />
                      }
                      label="Nintendo"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={pc} onChange={handleChange} name="pc" />
                      }
                      label="PC"
                    />
                  </FormGroup>
                  <FormLabel component="legend">Gaming Schedule:</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox checked={playstation} onChange={handleChange} name="playstation" />
                      }
                      label="Playstation"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={xbox} onChange={handleChange} name="xbox" />
                      }
                      label="Xbox"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={Nintendo} onChange={handleChange} name="nintendo" />
                      }
                      label="Nintendo"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={pc} onChange={handleChange} name="pc" />
                      }
                      label="PC"
                    />
                    <FormHelperText>Select the times of the week you're most likely to be gaming</FormHelperText>
                  </FormGroup>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Active Hours: {user.timePreferences}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Preferred Platform(s): {user.console}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Country: {user.country}
                </Typography>
            </CardContent>
            </Box>
          </FormGroup>
        </Card> 
    </div>
    // <div>
    //   <form className="bucket-form" onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       placeholder="Add to your bucket list"
    //       value={input}
    //       name="text"
    //       className="bucket-input"
    //       onChange={handleChange}
    //     ></input>
    //     <div className="dropdown">
    //       <button className={`dropbtn ${eagerness}`}>
    //         {eagerness || 'Priority'}
    //       </button>
    //       <div className="dropdown-content">
    //         <p onClick={() => setEagerness(eagernessLevel[0])}>Must do</p>
    //         <p onClick={() => setEagerness(eagernessLevel[1])}>Want to do</p>
    //         <p onClick={() => setEagerness(eagernessLevel[2])}>Take it or leave it</p>
    //       </div>
    //     </div>
    //     <button className="bucket-button">Add bucket list item</button>
    //   </form>
    // </div>
  ) : (
    <div>

    </div>
    // <div>
    //   <h3>Update Profile: {props.edit.value}</h3>
    //   <form className="profile-form" onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       placeholder={props.edit.value}
    //       value={input}
    //       name="text"
    //       className="bucket-input"
    //       onChange={handleChange}
    //     ></input>
    //     <div className="dropdown">
    //       <button className={`dropbtn ${eagerness}`}>
    //         {eagerness || 'Priority'}
    //       </button>
    //       <div className="dropdown-content">
    //         <p onClick={() => setEagerness(eagernessLevel[0])}>Must do</p>
    //         <p onClick={() => setEagerness(eagernessLevel[1])}>Want to do</p>
    //         <p onClick={() => setEagerness(eagernessLevel[2])}>Take it or leave it</p>
    //       </div>
    //     </div>
    //     <button className="bucket-button">Update</button>
    //   </form>
    // </div>
  );
}

// export default ProfileForm;
