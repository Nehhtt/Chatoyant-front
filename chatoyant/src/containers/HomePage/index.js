import React from 'react';
import { Box } from 'grommet/components/Box';
import { Text } from 'grommet/components/Text';

import globalContext from '../../components/globalContext';

function HomePage() {
  return (
    <globalContext.Consumer>
      {value => (
        <Box>
          <Text>{`Salut les nuls ${value}`}</Text>
        </Box>
      )}
    </globalContext.Consumer>
  );
}

export default HomePage;
