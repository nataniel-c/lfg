import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../helpers/auth';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';

const SignUp = () => {
  
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Card sx={{ width: 500, display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center', padding: 2}}>
      <FormGroup id="signup-form" sx={{ rowGap: 2, alignItems: 'center' }} onSubmit={handleSubmit}>
        <TextField
          required
          id="outlined-required"
          label="Username"
          name="username"
          type="username"
          value={formState.username}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
          margin="normal"
        />
        <button className="btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Sign Up</button>
      </FormGroup>
      </Card>
    </div>
  );
};

export default SignUp;