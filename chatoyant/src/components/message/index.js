import React from 'react';
import { Box } from 'grommet/components/Box';
import { Text } from 'grommet/components/Text';
import { Avatar } from 'grommet/components/Avatar';
import propTypes from 'prop-types';
import displayText from '../../utils/languages';

// const backgroundColor = "dark-3"
// const borderColor = "dark-2"

function Message(props) {
  return (
    <Box
      direction="row" // reverse row si le message vient de la personne connectée
      pad="xsmall"
      width={{ max: '27em' }}
    >
      <Box pad="small" width={{ min: '4em' }}>
        <Avatar size="medium" src="https://i.imgur.com/EroY8Ii.png" />
      </Box>
      <Box width={{ min: '5em' }}>
        <Text margin={{ right: 'xsmall' }}>{displayText(props.userName)}</Text>
        <Text>{displayText(props.date)}</Text>
        <Box overflow="scroll" height={{ max: '5em' }}>
          <Text>{displayText(props.content)}</Text>
        </Box>
      </Box>
    </Box>
  );
}

Message.propTypes = {
  userName: propTypes.string,
  date: propTypes.string,
  content: propTypes.string,
};

export default Message;
