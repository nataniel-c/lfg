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
import exampleUser2 from '../../helpers/exampleUser2';
// import Auth from '../../utils/auth';
import ProfilePic from '../../components/ProfileForm/ProfilePic'
import ProfileForm from '../ProfileForm'
import timeslots from '../../helpers/timeslots';
import PreferredTimes from './PreferredTimes';
import { useParams, Link } from 'react-router-dom';


export default function PlayerInfoCard({ user, mine }) {

    const [myProfile, setMyProfile] = React.useState(mine)

    return (
    <div>
        <Card sx={{ display: 'flex', padding: '20px' }}>
            <ProfilePic edit={false} user={user}/>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h4">
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
                    Active Hours: <PreferredTimes user={user} />
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Preferred Platform(s): {user.console}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Country: {user.country}
                </Typography>
            </CardContent>
            </Box>
            { myProfile ? (
                <Fab color="secondary" aria-label="edit">
                <Link to="/edit-profile"><EditIcon/></Link>
            </Fab>
            ):
            (
                <></>
            )}
        </Card> 
    </div>
    );
}