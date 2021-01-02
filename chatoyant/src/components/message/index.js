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
      direction="row" // reverse row si le message vient de la personne connectée
      pad="xsmall"
      flex={false}
      height='80px'
      
    >
      <Box
        pad="small"
      >
        <Avatar
          size="medium"
          responsive={false}
          src="https://i.imgur.com/EroY8Ii.png"
        />
      </Box>
      <Box
        direction="column"
      >
        <Box
          direction="row"
        >
          <Text
            margin={{right: 'xsmall'}}
          >
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
