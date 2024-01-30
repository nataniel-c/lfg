import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import GroupsIcon from '@mui/icons-material/Groups';
import { QUERY_USERS } from '../../utils/queries.js';
import { useQuery } from '@apollo/client';


const FriendList = () => {
    const [state, setState] = React.useState('left');

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    // const data = useQuery(QUERY_USERS);
    // console.log(data);

    const list = (anchor) => (
        <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Obamamama', 'HubertN', 'john_doe', 'jane_smith'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
        {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
                <Button size="large" onClick={toggleDrawer(anchor, true)} sx={{display: 'flex', flexDirection: 'column'}}><GroupsIcon />Friends</Button>
                <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                >
                    {list(anchor)}
                </Drawer>
            </React.Fragment>
        ))}
        </div>
    );
}

export default FriendList;