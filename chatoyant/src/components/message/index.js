import React from 'react';
import { Box } from 'grommet/components/Box';
import { Text } from 'grommet/components/Text';
import { Avatar } from 'grommet/components/Avatar';
import propTypes from 'prop-types';

// const backgroundColor = "dark-3"
// const borderColor = "dark-2"

function Message(props) {

  return (
    <Box
      direction="raw"
      pad="small"
    >
      <Box
        pad="small"
      >
        <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
      </Box>
      <Box
        direction="column"
      >
        <Box
          direction="raw"
        >
          <Text>
            {props.userName}
          </Text>
          <Text>
            {props.date}
          </Text>
        </Box>
        <Box>
          <Text>
            {props.content}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

Message.propTypes = {
    userName: propTypes.string,
    date: propTypes.string,
    content: propTypes.string,
}

export default Message;
