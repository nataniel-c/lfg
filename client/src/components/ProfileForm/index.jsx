// MUI imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
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
import TextField from '@mui/material/TextField';

import { useTheme } from '@mui/material/styles';

// Database manipulation imports
// import { useMutation } from '@apollo/client';
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
function ProfileForm({ edit , user }) {
  if (user.profilePic === '') {
    var profilePic = 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg';
  } else {
    var profilePic = user.profilePic;
  }

  const [profileState, setProfileState] = React.useState({
    pfp: profilePic,
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

  const [editState, setEditState] = React.useState(true)

  // const [changeUser, { error, data }] = useMutation(UPDATE_USER);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.checked)

    if (name === 'playstation' || name ===  'xbox' || name ===  'nintendo' || name ===  'pc') {
      setProfileState({
        ...profileState,
        platform: {
          ...profileState.platform,
          [e.target.name]: e.target.checked
        }
      })
    } 
    // ( name === 'gamertag' && value.length <= 50 || 
    // name === 'bio' && value.length <=300 || 
    // name === 'country') 
    else { 
      setProfileState({
        ...profileState,
        [name]: value,
      });
    }
    console.log(profileState)
  };

  const handleSave = async (e, index) => {
    e.preventDefault();
    setProfileState({...profileState});
    setEditState(false);
    edit = editState;
    user = ({profileState})
    // try {
    //   const { data } = await addUser({
    //     variables: { ...formState },
    //   });

    //   Auth.login(data.addUser.token);
    // } catch (e) {
    //   console.error(e);
    // }
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !editState ? (
    <div>
      <Alert severity="success">Your profile has been successfully changed. Now get to gaming!</Alert>
      <Button href="/">Back to the homepage.</Button>
    </div>
  ) : (
    <div>
      <Card sx={{ maxWidth: 1200, display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center', padding: 2}}>
        <FormGroup id="profile-form" sx={{ rowGap: 2, alignItems: 'center' }}>
          {/* PROFILE PICTURE INPUT */}
            <Box sx={{ display: 'flex'}}>
              <ProfilePic edit={true} user={user} />
              <Box sx={{ width: 400, display: 'flex', flexDirection: 'column' }}>
                <TextField
                  required
                  id="outlined-required"
                  label="Gamer Tag"
                  name="gamertag"
                  value={profileState.gamertag}
                  placeholder="maximum 50 characters"
                  onChange={handleChange}
                  margin="normal"
                />
                  {/* PROFILE BIO INPUT */}
                <TextField
                  multiline
                  rows={4}
                  required
                  id="outlined-required"
                  label="Profile Bio"
                  name="bio"
                  value={profileState.bio}
                  placeholder="maximum 300 characters"
                  onChange={handleChange}
                  margin="normal"
                />
              </Box>
            </Box>
            {/* PREFERRED GAMING PLATFORM INPUT */}
              <FormLabel component="legend">Preferred Platform(s):</FormLabel>
              <FormGroup sx={{ display: 'flex', flexDirection: 'row'}}>
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
                  control={
                    <Checkbox 
                      checked={profileState.platform.pc} 
                      onChange={handleChange} 
                      name="pc" 
                      />} 
                  label="PC"
                />
              </FormGroup>
              {/* GAMING SCHEDULE INPUT */}
              <FormLabel component="legend">Preferred Gaming Schedule:</FormLabel>
              <GameSchedule user={user}/>
          </FormGroup>
          <Button size="large" sx={{margin: 2}} variant="contained" onClick={handleSave}>Save Profile</Button>
        </Card> 
    </div>
  )
};

export default ProfileForm;
