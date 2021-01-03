import React, { useState } from 'react';
import { Box } from 'grommet/components/Box';
import { Text } from 'grommet/components/Text';
import { Button } from 'grommet/components/Button';
import PropTypes from 'prop-types';

import { useAuthDispatch, logout, useAuthState } from '../../context';

import displayText from '../../utils/languages'
import Invite from '../Invite'


function Header(props) {
  const dispatch = useAuthDispatch();
  const { userDetails } = useAuthState();

  const { history, selectedRoom } = props;
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout(dispatch);

    history.push('/');
  };

  const handleModalInvite = () => {
    setOpen(!open)
  }

  return (
    <Box
      direction="row"
      border={{ color: 'dark-2', size: 'medium', side: 'bottom' }}
    >
      <Box
        background="dark-3"
        pad={{ top: 'small', bottom: 'small'}}
        width="9em"
        border={{ color: 'dark-2', size: 'small', side: 'right' }}
        justify='center'
      >
        {
          selectedRoom && (
            <Box alignSelf="center">
              <Button label={displayText('Inviter')} onClick={handleModalInvite} color={{borderColor: "red"}} />
            </Box>
          )
        }
      </Box>
      <Box background="dark-3" justify="center" pad={{ left: 'small' }}>
        <Text size="xlarge" weight="bold">
          {displayText(userDetails.userName)}
        </Text>
      </Box>
      <Box alignSelf="center" margin={{ left: 'large' }}>
        <Button label={displayText('Déconnexion')} onClick={handleLogout} />
      </Box>
      {open && <Invite handleModal={handleModalInvite} selectedRoom={selectedRoom} />}
    </Box>
  );
}

Header.propTypes = {
  history: PropTypes.object,
  selectedRoom: PropTypes.object,
};

export default Header;
