import React from 'react';
import { Box } from 'grommet/components/Box';
import { Text } from 'grommet/components/Text';

import GlobalContext from '../../components/globalContext';

function HomePage() {
  return (
    <GlobalContext.Consumer>
      {context => (
        <Box>
          <Text>{`Salut les nuls ${context.cars.car001.name}`}</Text>
        </Box>
      )}
    </GlobalContext.Consumer>
  );
}

export default HomePage;
