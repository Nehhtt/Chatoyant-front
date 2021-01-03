import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { Box } from 'grommet/components/Box';
import { Text } from 'grommet/components/Text';
import { Avatar } from 'grommet/components/Avatar';
import CreateRoom from '../createRoom';
import displayText from '../../utils/languages';

import getRoom from '../../apiRequests/room/getRoom';

import { useAuthState } from '../../context';

function Rooms(props) {
  const { onClick } = props;

  const [modal, setModal] = useState(false);
  const [roomsData, setRoomsData] = useState([]);

  const userDetail = useAuthState();

  function onClickHandle() {
    setModal(!modal);
  }

  useEffect(() => {
    getRoom(userDetail.token).then((data) => {
      // eslint-disable-next-line no-console
      console.log(data);
      setRoomsData(data.data.rooms);
    });
  }, []);

  return (
    <Box direction="column" height="100%">
      <Box height="90%">
        {roomsData.map((element) => (
          <Box
            direction="row"
            pad="small"
            key={element.roomName}
            onClick={() => onClick(element)}
            justify="center"
          >
            <Avatar background={{ color: 'dark-1' }} size="medium">
              <Text weight="bold">
                {displayText(element.roomName.toUpperCase()[0])}
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
  onClick: propTypes.any,
};

export default Rooms;
