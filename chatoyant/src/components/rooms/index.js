import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Box } from 'grommet/components/Box';
import { Text } from 'grommet/components/Text';
import { Avatar } from 'grommet/components/Avatar';
import CreateRoom from '../createRoom';
import displayText from '../../utils/languages';

function Rooms(props) {
  const { roomsData, onClick } = props;

  const [modal, setModal] = useState(false);

  function onClickHandle() {
    setModal(!modal);
  }

  if (roomsData.length === 0) return <Box></Box>;

  return (
    <Box direction="column" height="100%">
      <Box height="90%">
        {roomsData.map((element) => (
          <Box
            direction="row"
            pad="small"
            key={element.name}
            onClick={() => onClick(element)}
            justify="center"
          >
            <Avatar background={{ color: 'dark-1' }} size="medium">
              <Text weight="bold">
                {displayText(element.name.toUpperCase()[0])}
              </Text>
            </Avatar>
          </Box>
        ))}
      </Box>
      <Box direction="row" justify="center">
        <Avatar
          background={{ color: 'dark-1' }}
          size="medium"
          onClick={() => onClickHandle()}
        >
          <Text color="white" size="xxlarge">
            +
          </Text>
        </Avatar>
      </Box>
      {modal && <CreateRoom handleModal={onClickHandle} />}
    </Box>
  );
}

Rooms.propTypes = {
  roomsData: propTypes.array,
  onClick: propTypes.any,
};

export default Rooms;
