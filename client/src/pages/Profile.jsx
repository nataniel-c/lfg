import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages and getting the current param variable's value from URL
import { useParams, Link, Navigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import PlayerInfoCard from '../components/PlayerInfoCard';
import FriendList from '../components/FriendList';
import exampleUser from '../helpers/exampleUser'
import API from '../helpers/API';
import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../helpers/auth';

import Button from "@mui/material/Button"

export default function Profile() {
  const [user, setUser] = useState({exampleUser});

  return (
    <>
      <>
        {/* Conditionally render the full profile or a Loading string, depending on whether user data is available */}
        {exampleUser.username ? <PlayerInfoCard user={exampleUser} mine={true}/> : <p>Loading...</p>}
      </>
      <footer className="profile-footer">
        {/* Link the user back to the homepage. The to prop is used in place of an href */}
        <Button href="/">← Go Back</Button>
      </footer>
    </>
  );
}
