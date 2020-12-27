import React from 'react';
import { Box } from 'grommet/components/Box';
// import { Text } from 'grommet/components/Text';
import { Grid } from 'grommet/components/Grid';

function Lobby() {
  return (
    <Grid
      rows={['xxsmall', 'medium']}
      columns={['xxsmall', 'small', 'large']}
      gap="small"
      fill='horizontal'
      areas={[
        { name: 'header', start: [0, 0], end: [2, 0] },
        { name: 'room', start: [0, 1], end: [0, 1] },
        { name: 'chat', start: [1, 1], end: [1, 1] },
        { name: 'main', start: [2, 1], end: [2, 1] },
    ]}
    >
      <Box gridArea="header" background="brand" />
      <Box gridArea="room" background="light-5" />
      <Box gridArea="chat" background="light-3" />
      <Box gridArea="main" background="light-2" />
    </Grid>
  );
}

export default Lobby;
