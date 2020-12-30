import React from 'react';
import { Box } from 'grommet/components/Box';
import { Text } from 'grommet/components/Text';

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
        <Text alignSelf="center" size="xxlarge" weight="bold">WELCOME</Text>
      </Box>
      <Box height="20%">
        <Text alignSelf="center" size="xxlarge" weight="bold">TO</Text>
      </Box>
      <Box height="20%">
        <Text alignSelf="center" size="xxlarge" weight="bold">CHATOYANT</Text>
      </Box>
    </Box>
  );
}

export default Welcome;
