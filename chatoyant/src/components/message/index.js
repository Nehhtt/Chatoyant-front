import React from 'react';
import { Box } from 'grommet/components/Box';
import { Text } from 'grommet/components/Text';
import { Avatar } from 'grommet/components/Avatar';
import propTypes from 'prop-types';
import displayText from '../../utils/languages';

function Message(props) {
  return (
    <Box
      direction={props.isUser?"row-reverse":"row"} 
      width="90%"
    >
      <Box
        direction={props.isUser?"row-reverse":"row"} 
        pad="xsmall"
      >
        <Box
          pad="small"
          width={{ min: '4em' }}
        >
          <Avatar size="medium" src="https://i.imgur.com/EroY8Ii.png" />
        </Box>
        <Box 
          width={{ min: '5em' }}
          align={props.isUser?"end":"start"} 
        >
          <Text margin={{ right: 'xsmall' }} weight="bold">{displayText(props.userName)}</Text>
          <Text size="xsmall">{displayText(props.date)}</Text>
          <Box overflow="hidden" height={{ max: '5em' }}>
            <Text>{displayText(props.content)}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

Message.propTypes = {
  userName: propTypes.string,
  date: propTypes.string,
  content: propTypes.string,
  isUser: propTypes.bool
};

export default Message;
