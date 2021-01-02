import React from 'react';
import { Box } from 'grommet/components/Box';
import { Text } from 'grommet/components/Text';
import { Button } from 'grommet/components/Button';
import PropTypes from 'prop-types';
import { useAuthDispatch, logout } from '../../context';
import displayText from '../../utils/languages';

function Header(props) {
  const dispatch = useAuthDispatch();

  const handleLogout = () => {
    logout(dispatch);

    props.history.push('/');
  };
  return (
    <Box
      direction="row"
      border={{ color: 'dark-2', size: 'medium', side: 'bottom' }}
    >
      <Box
        background="dark-3"
        pad={{ top: 'small', bottom: 'small' }}
        basis="small"
        border={{ color: 'dark-2', size: 'small', side: 'right' }}
      >
        <Text size="xlarge" textAlign="center" weight="bold">
          {displayText('Rooms')}
        </Text>
      </Box>
      <Box background="dark-3" justify="center" pad={{ left: 'small' }}>
        <Text size="xlarge" weight="bold">
          {displayText(props.userName)}
        </Text>
      </Box>
      <Box alignSelf="center" margin={{ left: 'large' }}>
        <Button label={displayText('Déconnexion')} onClick={handleLogout} />
      </Box>
    </Box>
  );
}

Header.propTypes = {
  userName: PropTypes.string.isRequired,
  history: PropTypes.object,
};

export default Header;
