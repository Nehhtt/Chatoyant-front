import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'grommet/components/Button';
import { Box } from 'grommet/components/Box';
import { Text } from 'grommet/components/Text';
import { useAuthDispatch, logout, useAuthState } from '../../context';

function WelcomePage(props) {
  const dispatch = useAuthDispatch();
  const userDetails = useAuthState();

  const handleLogout = () => {
    logout(dispatch);

    props.history.push('/');
  };
  return (
    <Box fill align="center" justify="center">
      <Text>
        Bienvenue
        {userDetails.userDetails.userName}
      </Text>
      <Box margin="xxlarge">
        <Button label="Déconnexion" onClick={handleLogout} />
      </Box>
    </Box>
  );
}

WelcomePage.propTypes = {
  history: PropTypes.object,
};

export default WelcomePage;
