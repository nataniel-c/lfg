import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';

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

export default timeslots;