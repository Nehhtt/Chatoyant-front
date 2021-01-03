import React, { useState } from 'react';
import { Layer } from 'grommet/components/Layer';
import { Box } from 'grommet/components/Box';
import { Form } from 'grommet/components/Form';
import { FormField } from 'grommet/components/FormField';
import { TextInput } from 'grommet/components/TextInput';
import { Button } from 'grommet/components/Button';
import { Text } from 'grommet/components/Text';
import propTypes from 'prop-types';
import displayText from '../../utils/languages';

import { useAuthState } from '../../context';

import inviteUser from '../../apiRequests/room/InviteUser';

function Invite(props) {
  const { handleModal, selectedRoom } = props;

  const [val, setValue] = useState({ name: '' });
  const [error, setError] = useState('');

  const { token } = useAuthState();

  function invite({ name }) {
    inviteUser(
      { email: name, userName: name, roomName: selectedRoom.roomName },
      token,
    ).then((data) => {
      if (data.status === 'success') {
        handleModal();
        return 'success';
      }
      setError(data);
      return 'error';
    });
  }

  return (
    <Layer>
      <Box pad="small">
        <Box>
          <Form
            value={val}
            onChange={(nextValue) => setValue(nextValue)}
            onReset={() => setValue({})}
            onSubmit={({ value }) => invite(value)}
          >
            <FormField
              name="name"
              htmlfor="text-input-id"
              label={displayText("Nom ou email de l'utilisateur")}
            >
              <TextInput
                id="text-input-id"
                name="name"
                value={displayText(val.name)}
              />
            </FormField>
            {error && (
              <Box>
                <Text color="red">{error}</Text>
              </Box>
            )}
            <Box direction="row" gap="medium">
              <Button type="submit" primary label={displayText('Inviter')} />
              <Button
                onClick={() => handleModal()}
                label={displayText('Fermer')}
              />
            </Box>
          </Form>
        </Box>
      </Box>
    </Layer>
  );
}

Invite.propTypes = {
  handleModal: propTypes.func,
  selectedRoom: propTypes.object,
};

export default Invite;
