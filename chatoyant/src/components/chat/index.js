import React, { useState } from 'react';
import { Box } from 'grommet/components/Box';
import { TextInput } from 'grommet/components/TextInput';
import { Button } from 'grommet/components/Button';

// const backgroundColor = "dark-3"
// const borderColor = "dark-2"

function Welcome() {

  const [ newMessage, setMessage ] = useState("")

  function handleSend() {
      // call api request
      setMessage("")
  }

  return (
    <Box
      direction="column"
      height="100%"
    >
      <Box
        direction="column"
        height="95%"
      >

      </Box>
      <Box
        direction="row"
      >
        <Box
          width="90%"
        >
          <TextInput 
            placeholder="type here"
            value={newMessage}
            onChange={event => setMessage(event.target.value)}
          />
        </Box>
        <Box
          margin={{left: 'medium'}}
        >
          <Button primary label="Send" size="medium" onClick={() => handleSend()} />
        </Box>
      </Box>
    </Box>
  );
}

export default Welcome;
