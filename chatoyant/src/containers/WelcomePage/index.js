/* eslint-disable spaced-comment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useAuthDispatch, logout, useAuthState } from '../../context';

function WelcomePage(props) {
  const dispatch = useAuthDispatch(); // read dispatch method from context
  const userDetails = useAuthState(); //read user details from context

  const handleLogout = () => {
    logout(dispatch); //call the logout action

    props.history.push('/'); //navigate to logout page on logout
  };
  return (
    <div style={{ padding: 10 }}>
      <div>
        <h1>Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <p>Welcome {userDetails.user.email}</p>
    </div>
  );
}

export default WelcomePage;
