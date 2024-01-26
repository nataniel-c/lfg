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

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'playstation' || 'xbox' || 'nintendo' || 'pc') {
      setProfileState({
        ...profileState,
        platform: {
          ...profileState.platform,
          [name]: value
        }
      })
    } else if (
    name === 'gamertag' && value.length <= 50 || 
    name === 'bio' && value.length <=300 || 
    name === 'country') { 
      setProfileState({
        ...profileState,
        [name]: value,
      });
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return data ? (
    <div>
      <Alert severity="success">Your profile has been successfully changed. Now get to gaming!</Alert>
      <Button href="/">Back to the homepage.</Button>
    </div>
  ) : (
    <div>
      <Card sx={{ display: 'flex' }}>
        <FormGroup>
          {/* PROFILE PICTURE INPUT */}
            <ProfilePic edit={true} profilePic={profileState.pfp} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    {/* GAMERTAG INPUT */}
                <Box>
                  <TextField
                    required
                    id="outlined-required"
                    label="Gamer Tag"
                    value={profileState.gamertag}
                    placeholder="maximum 50 characters"
                    onChange={handleChange}
                  />
                    {/* PROFILE BIO INPUT */}
                  <TextField
                    required
                    id="outlined-required"
                    label="Profile Bio"
                    value={profileState.bio}
                    placeholder="maximum 300 characters"
                    onChange={handleChange}
                  />
                  </Box>
                  {/* PREFERRED GAMING PLATFORM INPUT */}
                  <FormLabel component="legend">Preferred Platform(s):</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox 
                          checked={profileState.platform.playstation} 
                          onChange={handleChange} 
                          name="playstation" 
                          />}
                      label="Playstation"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox 
                          checked={profileState.platform.xbox} 
                          onChange={handleChange} 
                          name="xbox" 
                        />}
                      label="Xbox"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox 
                          checked={profileState.platform.nintendo} 
                          onChange={handleChange} 
                          name="nintendo" 
                        />}
                      label="Nintendo"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={pc} onChange={handleChange} name="pc" />}
                      label="PC"
                    />
                  </FormGroup>
                  {/* GAMING SCHEDULE INPUT */}
                  <GameSchedule />
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
  )
};

// export default ProfileForm;
