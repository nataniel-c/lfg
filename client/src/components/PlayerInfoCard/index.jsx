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
import exampleUser from '../../helpers/exampleUser';
// import Auth from '../../utils/auth';
import ProfilePic from '../../components/ProfileForm/ProfilePic'
import ProfileForm from '../ProfileForm'
import timeslots from '../../helpers/timeslots';


export default function PlayerInfoCard({ user }) {

    console.log(timeslots)
    console.log(user.profilePic)
    const editProfile = () => {
        return (
            <div>
                <ProfileForm edit={false} profilePic={`${user.profilePic}`} />;
            </div>
        )
    }

    return (
    <div>
        <Card sx={{ display: 'flex' }}>
            <ProfilePic edit={false} profilePic={`${user.profilePic}`}/>
            <Fab color="secondary" aria-label="edit">
                <EditIcon onClick={editProfile}/>
            </Fab>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    {user.gamerTag}
                </Typography>
                <Box>
                    <Typography variant="subtitle1" color="text.secondary" component="div" paragraph='true'>
                        {user.userbio}
                    </Typography>
                </Box>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Games I like to play: {user.gamePreferences}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Active Hours: 24/7
                    {/* {`${timeslots.where('timeslotId', [user.gamePreferences]).day} ${timeslots.where('timeslotId', [user.gamePreferences]).day}`} */}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Preferred Platform(s): {user.console}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Country: {user.country}
                </Typography>
            </CardContent>
            </Box>
        </Card> 
    </div>
    );
}