import React, { useState } from 'react';
import { Box } from 'grommet/components/Box';
import { Text } from 'grommet/components/Text';

import useWindowSize from '../../utils/screenSize'

import Header from '../../components/header';
import Rooms from '../../components/rooms';
import Welcome from '../../components/welcome';

const backgroundColor = "dark-3"
const borderColor = "dark-2"

function Main() {
  const size = useWindowSize();

  const [ choosedRoom, chooseRoom ] = useState(null);

  function onClickHandle(val) {
    chooseRoom(val)
  }

  return (
    <Box
      direction="column"
      height={`${size.height}px`}
      border={{ color: borderColor, size: 'medium' }}
      background={backgroundColor}
    >
      <Header userName="test" />
      <Box 
        direction="row"
        height="100%"
      >
        <Box  
          background={backgroundColor}
          basis="small"
          border={{color: borderColor, size: "small", side: "right"}}
        >
          <Rooms roomsData={[{name: "test"}, {name: "machmach"}]} onClick={onClickHandle} />
        </Box>
        <Box  
          background={backgroundColor}
          pad="small"
          basis="full"
        >
          {
            choosedRoom? (
              <Text>
                {choosedRoom.name}
                {' '}
                est choisie
              </Text>
          ):<Welcome />
          }
        </Box>
      </Box>
    </Box>
  );
}

export default Main;
