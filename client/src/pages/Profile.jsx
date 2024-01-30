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
//   const { username: userParam } = useParams();

//   const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
//     variables: { username: userParam },

//   const user = data?.me || data?.user || {};
//   // navigate to personal profile page if username is yours
//   if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
//     return <Navigate to="/me" />;
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!user?.username) {
//     return (
//       <h4>
//         You need to be logged in to see this. Use the navigation links above to
//         sign up or log in!
//       </h4>
//     );
//   }

  return (
    <>
      <>
        {/* Conditionally render the full profile or a Loading string, depending on whether user data is available */}
        {exampleUser.username ? <PlayerInfoCard user={exampleUser} /> : <p>Loading...</p>}
      </>
      <footer className="profile-footer">
        {/* Link the user back to the homepage. The to prop is used in place of an href */}
        <Button href="/">← Go Back</Button>
      </footer>
    </>
  );
}
