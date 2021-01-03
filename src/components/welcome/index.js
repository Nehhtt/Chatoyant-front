import React from 'react';
import { Box } from 'grommet/components/Box';
import { Text } from 'grommet/components/Text';
import displayText from '../../utils/languages';

// const backgroundColor = "dark-3"
// const borderColor = "dark-2"

function Welcome() {
  return (
    <Box
      direction="column"
      height="full"
      alignContent="center"
      justify="center"
    >
      <Box height="20%">
        <Text alignSelf="center" size="xxlarge" weight="bold">
          {displayText('Bienvenue')}
        </Text>
      </Box>
      <Box height="20%">
        <Text alignSelf="center" size="xxlarge" weight="bold">
          {displayText('sur')}
        </Text>
      </Box>
      <Box height="20%" direction="row" alignSelf="center">
        <Text alignSelf="center" size="xxlarge" weight="bold" color="neutral-3">
          {displayText('CHAT')}
        </Text>
        <Text alignSelf="center" size="xxlarge" weight="bold" color="neutral-2">
          {displayText('OYANT')}
        </Text>
      </Box>
    </Box>
  );
}

export default Welcome;
