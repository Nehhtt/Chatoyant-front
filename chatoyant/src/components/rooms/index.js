import React from 'react';
import propTypes from 'prop-types'
import { Box } from 'grommet/components/Box';
import { Text } from 'grommet/components/Text';
import { Avatar } from 'grommet/components/Avatar';

function Rooms(props) {
    const { roomsData, onClick } = props

    if (roomsData.length === 0)
        return (
          <Box>
          </Box>
        )

    return (
        roomsData.map((element) => (
          <Box
            direction="row"
            pad="small"
            elevation="small"
            key={element.name}
            onClick={() => onClick(element)}
          >
            <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />   
            <Text
              alignSelf="center"
              size="small"
              weight="bold"
              margin={{left: "medium"}}
            >
              {element.name}
            </Text>
          </Box>
        ))
    );
}

Rooms.propTypes = {
    roomsData: propTypes.array,
}

export default Rooms;
