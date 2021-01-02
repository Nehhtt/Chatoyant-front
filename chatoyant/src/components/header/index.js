import React from 'react';
import { Box } from 'grommet/components/Box';
import { Text } from 'grommet/components/Text';

import displayText from '../../utils/languages'

import { useAuthState } from '../../context';


function Header() {

  const { userDetails } = useAuthState();

  return (
    <Box
      direction="row"
      border={{ color: 'dark-2', size: 'medium', side: "bottom" }}
    >
      <Box
        background="dark-3"
        pad={{top: "small", bottom: "small"}}
        basis="small"
        border={{color: 'dark-2', size: "small", side: "right"}}
      >
        <Text size="xlarge" textAlign="center" weight="bold">{displayText("Rooms")}</Text>
      </Box>
      <Box 
        background="dark-3"
        basis="full"
        justify="center"
        pad={{left: "small"}}
      >
        <Text size="xlarge" weight="bold">{displayText(userDetails.userName)}</Text>
      </Box>
    </Box>
  );
}

export default Header;
