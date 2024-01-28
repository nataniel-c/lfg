import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages and getting the current param variable's value from URL
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import ProfileForm from '../components/ProfileForm';
// import user from [NEED SEED FILE];
import FriendList from '../components/FriendList';
import exampleUser from '../helpers/exampleUser'
import API from '../helpers/API';

import Button from "@mui/material/Button"

export default function EditProfile() {
  const [user, setUser] = useState({exampleUser});
  // The useParams hook will yield an object. Its keys match the parameters defined on each route. Its values match the current URL value in those parameter locations
//   const { id } = useParams();

//   const fetchData = async () => {
//     const { data } = await API.getSingleUser(id);

//     setUser(data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

  return (
    <>
      <Button href="/">← Go Back</Button>
      <>
        {/* Conditionally render the full profile or a Loading string, depending on whether user data is available */}
        {exampleUser.username ? <ProfileForm edit={true} user={exampleUser} /> : <p>Loading...</p>}
      </>
      <footer className="profile-footer">
        {/* Link the user back to the homepage. The to prop is used in place of an href */}
        <Button href="/">← Go Back</Button>
      </footer>
    </>
  );
}
