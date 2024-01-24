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

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';


export default function GameSchedule(props) {
        
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    // create arrays that will hold info for the times and days
    const times = [
        {
            id: 1,
            name: "morning",
            time: "Morning",
            icon: <WbSunnyIcon />
        },
        {
            id: 2,
            name: "afternoon",
            time: "Afternoon",
            icon:  <WbTwilightIcon />
        },
        {
            id: 3,
            name: "evening",
            time: "Evening",
            icon: <NightlightRoundIcon />
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

    let timeSlots = [];
    let index = 0;
    // create an array that gives each possible time slot a unique number
    // Loop to initialize 2D array elements.
    times.forEach((time) => {
        days.forEach((day) => {
            timeSlots[index] = {
                timeSlotId: index+1,
                time: time.name,
                day: day.name
            };
        });
    })

    console.log(timeSlots)

    function TopRow() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Item>Time of Day</Item>
                </Grid>
                {days.map(day =>
                    <Grid item xs={4}>
                        <Item>{day.day}</Item>
                    </Grid>
                )}
            </React.Fragment>
        );
    }

    function DayRows() {
        return (
            <div>
                {times.map(time =>
                <React.Fragment>
                    <FormControl>
                        <Grid item xs={4}>
                            <Item>{time.time} {time.icon}</Item>
                        </Grid>
                        {days.map(day =>

                        )}
                        <Grid item xs={4}>
                            <Item>
                                <Checkbox checked={gilad} onChange={handleChange} name="" />
                            </Item>
                        </Grid>
                    </FormControl>
                </React.Fragment>
                )}
            </div>
        );
    }


        const [state, setState] = React.useState({
            monmorn: false,
            tuesmorn: false,
            wedmorn: false,
            thursmorn: false,
            frimorn: false,
            satmorn: false,
            sunmorn: false,
            monnoon: false,
            tuesnoon: false,
            wednoon: false,
            wedmorn: false,
            thursmorn: false,
            monmorn: false,
            tuesmorn: false,
            wedmorn: false,
            thursmorn: false,
        });
        
        
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3} color="primary">
          <TopRow />
        </Grid>
        <Grid container item spacing={3} sx={{ color: '#e2a816' }}>
          <DayRow />
        </Grid>
        <Grid container item spacing={3} sx={{ color: '#e24216' }}>
          <AfternoonRow />
        </Grid>
        <Grid container item spacing={3} sx={{ color: '#654cd9' }}>
          <EveningRow />
        </Grid>
      </Grid>
    </Box>
  );
}