/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Box } from 'grommet/components/Box';

import useWindowSize from '../../utils/screenSize';

import Header from '../../components/header';
import Rooms from '../../components/rooms';
import Welcome from '../../components/welcome';
import Chat from '../../components/chat';

const backgroundColor = 'dark-3';
const borderColor = 'dark-2';

function Main(props) {
  const size = useWindowSize();

  const [choosedRoom, chooseRoom] = useState(null);

  function onClickHandle(val) {
    chooseRoom(val);
  }

  return (
    <Box
      direction="column"
      height={`${size.height}px`}
      border={{ color: borderColor, size: 'medium' }}
      background={backgroundColor}
    >
      <Header userName="test" history={props.history} selectedRoom={choosedRoom} />
      <Box direction="row" height="100%">
        <Box
          background={backgroundColor}
          border={{ color: borderColor, side: 'right' }}
          basis="small"
        >
          <Rooms onClick={onClickHandle} />
        </Box>
        <Box background={backgroundColor} pad="small" basis="full">
          {choosedRoom ? <Chat /> : <Welcome />}
        </Box>
      </Box>
    </Box>
  );
}

export default Main;
