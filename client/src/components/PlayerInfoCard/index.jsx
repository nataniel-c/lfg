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

import Auth from '../../utils/auth';
import ProfileForm from '../ProfileForm'


export default function PlayerInfoCard({ user, loggedIn, setLoggedIn }) {
    const theme = useTheme();

    const [edit, setEdit] = useState({
        id: null,
        value: '',
        eagerness: '',
    });
    
    console.log(props.profile);
    
    const submitUpdate = (value) => {
        props.editBucketItem(edit.id, value);
        setEdit({ id: null, value: '', eagerness: '' });
    };
    
    if (edit.id) {
        return <ProfileForm edit={edit} onSubmit={submitUpdate} />;
    }

    return (
    <div>
        {Auth.loggedIn() ? (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                id='pfp'
                component="img"
                sx={{ width: 150, height: 150, objectFit: 'cover'}}
                image={user.pfp}
                alt="profile picture"
            />
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
                        {user.bio}
                    </Typography>
                </Box>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Recent Activity: {`${user.recentGame} - ${user.gamingHours} hours played`}
                </Typography>
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
        </Card> 
        ) : (
        )}
    </div>
    );
}