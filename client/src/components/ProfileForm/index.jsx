import * as React from 'react';
import { useTheme } from '@mui/material/styles';
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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { useState } from 'react';

// Properties that are defined in the profile: 
// profile picture, gamertag, bio, preferred console, gaming schedule, country of origin, 

function ProfileForm(props) {
  const [file, setFile] = useState<File | undefined>();
  const [gamerTag, setGamerTag] = React.useState('');
  const [bio, setBio] = React.useState('');
  const [input, setInput] = useState('');
  const [platform, setPlatform] = React.useState({
    playstation: false,
    xbox: false,
    nintendo: false,
    pc: false
  });

  const [country, setCountry] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };    

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      gamerTag: gamerTag,

    });

  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !props.edit ? (
    <div>
      <Card sx={{ display: 'flex' }}>
        <FormGroup>
          {/* PROFILE PICTURE INPUT */}
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
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    {/* GAMERTAG INPUT */}
                <Box>
                  <TextField
                    required
                    id="outlined-required"
                    label="Gamer Tag"
                    value={gamerTag}
                    placeholder="example: gamertag123"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setGamerTag(event.target.value);
                    }}
                  />
                    {/* PROFILE BIO INPUT */}
                  <TextField
                    required
                    id="outlined-required"
                    label="Profile Bio"
                    value={bio}
                    placeholder="maximum 300 characters"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setBio(event.target.value);
                    }}
                  />
                  </Box>
                  {/* PREFERRED GAMING PLATFORM INPUT */}
                  <FormLabel component="legend">Preferred Platform(s):</FormLabel>
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
                  <FormLabel id="gaming-day">Day of the Week</FormLabel>
                    <RadioGroup
                      aria-labelledby="gaming-day"
                      name="gamingDay"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel value="monday" control={<Radio />} label="Monday" />
                      <FormControlLabel value="tuesday" control={<Radio />} label="Tuesday" />
                      <FormControlLabel value="wednesday" control={<Radio />} label="Wednesday" />
                      <FormControlLabel value="thursday" control={<Radio />} label="Thursday" />
                      <FormControlLabel value="monday" control={<Radio />} label="Monday" />
                      <FormControlLabel value="tuesday" control={<Radio />} label="Tuesday" />
                    </RadioGroup>
                    <FormLabel id="demo-controlled-radio-buttons-group">Day of the Week</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                    
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
  //) : (
  //  <div>

   // </div>
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
  //);
}

export default ProfileForm;
