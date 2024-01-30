
import React from 'react';
import timeslots from '../../helpers/timeslots';

const PreferredTimes = ({ user }) => {
  if (!user.timePreferences) {
    user.timePreferences = [];
  }
  const userTimeslots = timeslots.filter((timeslot) =>
    user.timePreferences.includes(timeslot.timeslotId)
  );

    return (
      <ul>
        {userTimeslots.map((timeslot) => (
            <li key={timeslot.timeslotId}>{timeslot.day} {timeslot.time}</li>
        ))}
      </ul>
    );
  };

export default PreferredTimes;
