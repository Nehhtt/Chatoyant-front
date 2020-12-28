import React from 'react';
import { Box } from 'grommet/components/Box';
import { Text } from 'grommet/components/Text';
import PropTypes from 'prop-types';

import displayText from '../../utils/languages'

function Header(props) {
  return (
    <Box
      direction="row"
      border={{ color: 'dark-2', size: 'medium' }}
    >
      <Box
        background="dark-3"
        pad="small"
        basis="small"
        border={{color: 'dark-2', size: "small", side: "right"}}
      >
        <Text size="xxlarge" textAlign="center" weight="bold">{displayText("Rooms")}</Text>
      </Box>
      <Box 
        background="dark-3"
        basis="full"
        justify="center"
        pad={{left: "small"}}
      >
        <Text size="xlarge" weight="bold">{displayText(props.userName)}</Text>
      </Box>
    </Box>
  );
}

Header.propTypes = {
    userName: PropTypes.string.isRequired
}

export default Header;
