import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
// import icons:
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

// Code to create a section of the profile creation/editing form that allows you to select your preferred gaming hours
export default function GameSchedule({ user }) {
    const [gameSchedule, setGameSchedule] = React.useState('');

    // create arrays that will hold info for the times and days
    const times = [
        {
            id: 1,
            name: "morning",
            time: "Morning",
            icon: <WbSunnyIcon />,
            color: '#e2a816' 
        },
        {
            id: 2,
            name: "afternoon",
            time: "Afternoon",
            icon:  <WbTwilightIcon />,
            color: '#e24216' 
        },
        {
            id: 3,
            name: "evening",
            time: "Evening",
            icon: <NightlightRoundIcon />,
            color: '#654cd9' 
        }
    ];

    const days = [
        { id: 1, name: "monday", day: "Monday" },
        { id: 2, name: "tuesday", day:"Tuesday" },
        { id: 3, name: "wednesday", day: "Wednesday" },
        { id: 4, name: "thursday", day: "Thursday" },
        { id: 5, name: "friday", day: "Friday" },
        { id: 6, name: "saturday", day: "Saturday" },
        { id: 7, name: "sunday", day: "Sunday"}
    ]

    // create an array that gives each possible time slot a unique number to be used when handling the checkboxes being checked
    // might not need to be used.
    let timeslots = [];
    let index = 0;
    times.forEach((time) => {
        days.forEach((day) => {
            timeslots[index] = {
                timeslotId: `T${time.id}D${day.id}`,
                time: time.name,
                day: day.name
            };
            index = index++;
        });
    })

    // handlechange returns the name of the checkbox being checked i.e. the "timeslotId"
    const handleChange = (event) => {
        setGameSchedule({
            ...gameSchedule,
            [event.target.name]: event.target.checked,
        });
        user.timePreferences = gameSchedule;
    };

    console.log(timeSlots)

    // Creates the top row of the timeslot selection grid
    // loops over the days to display their names across the top row
    function TopRow(days) {
        return (
            <React.Fragment>
                <Grid item xs={1}>
                    <Item>Time of Day</Item>
                </Grid>
                {days.map(day =>
                    <Grid key={day.id} item xs={1}>
                        <Item>{day.day}</Item>
                    </Grid>
                )}
            </React.Fragment>
        );
    }

    // Creates the three other rows of the timeslot selection grid
    // Rows: times of day --- columns: days of the week
    // loops over the times and days to create a unique checkbox that will add the timeslot to the user's gaming schedule
    function FormRows({ times, days }) {
        return (
            <React.Fragment>
                <FormControl>
                    {times.map(time => 
                    <Grid key={time.id} container item spacing={1} >
                        {/* Make the label that will go on the leftmost column */}
                        <Grid item xs={1}>
                            <Item sx={{ backgroundColor: time.color }}>{time.time} <WbSunnyIcon /></Item>
                        </Grid>
                        {/* Loop over the 7 day columns to make checkboxes for each on the selected time row */}
                        {days.map(day =>
                            <Grid key={day.id} item xs={1}>
                                <Item sx={{ backgroundColor: time.color }}>
                                    <Checkbox
                                        checked={false} 
                                        onChange={handleChange} 
                                        name={`T${time.id}D${day.id}`} 
                                    />
                                </Item>
                            </Grid>
                        )} 
                    </Grid>
                    )}
                </FormControl>
            </React.Fragment>
        );
    }

    // Return the nicely packaged component:    
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} columns={8}>
            <Grid container item spacing={1} color="primary">
                <TopRow times={times}/>
            </Grid>
                <FormRows times={times} days={days}/>
        </Grid>
        </Box>
    );
};