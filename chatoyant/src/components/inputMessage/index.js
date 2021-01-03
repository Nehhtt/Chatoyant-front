import React, { useState } from 'react';
import { Box } from 'grommet/components/Box';
import { TextInput } from 'grommet/components/TextInput';
import { Button } from 'grommet/components/Button';
import { Keyboard } from 'grommet/components/Keyboard';

import propTypes from 'prop-types';

import displayText from '../../utils/languages';

function InputMessage(props) {

  const { handleSend } = props
  const [newMessage, setMessage] = useState('');

  function send() {
      handleSend(newMessage);
      setMessage('');
  }

  return (
    <Box direction="row">
      <Box width="90%">
        <Keyboard onEnter={() => send()}>
          <TextInput
            placeholder={displayText('Tapez ici')}
            value={newMessage}
            onChange={(event) => setMessage(event.target.value)}
          />
        </Keyboard>
      </Box>
      <Box margin={{ left: 'medium' }}>
        <Button
          primary
          label={displayText('Envoyer')}
          size="medium"
          onClick={() => send()}
        />
      </Box>
    </Box>
  );
}

InputMessage.propTypes = {
  handleSend: propTypes.func
}

export default InputMessage;
