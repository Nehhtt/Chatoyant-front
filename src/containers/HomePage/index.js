import React from 'react';
import { Box } from 'grommet/components/Box';
import { Text } from 'grommet/components/Text';
import Button from '../../components/atoms/Button/Button';
import routes from '../../static/routes';
import displayText from '../../utils/languages';

function HomePage() {
  return (
    <Box>
      <Box align="center" margin="medium">
        <Box direction="row">
          <Text color="neutral-3" size="xxlarge" weight="bold">
            {displayText('CHAT')}
          </Text>
          <Text color="neutral-2" size="xxlarge" weight="bold">
            {displayText('OYANT')}
          </Text>
        </Box>
      </Box>
      <Box align="center" margin={{ top: 'xxlarge' }}>
        <Box direction="row" gap="xlarge">
          <Button
            label={displayText('Connexion')}
            to={{
              pathname: routes[0].path,
            }}
          />
          <Button
            label={displayText('Inscription')}
            to={{
              pathname: routes[1].path,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
