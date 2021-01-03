import React, { useState } from 'react';
import { Layer } from 'grommet/components/Layer';
import { Box } from 'grommet/components/Box';
import { Form } from 'grommet/components/Form';
import { FormField } from 'grommet/components/FormField';
import { TextInput } from 'grommet/components/TextInput';
import { Button } from 'grommet/components/Button';
import propTypes from 'prop-types';
import displayText from '../../utils/languages';
import { useAuthState } from '../../context';
import createRoom from '../../apiRequests/room/createRoom';
import createChat from '../../apiRequests/room/createChat';

function CreateRoom(props) {
  const { handleModal } = props;

  const [val, setValue] = useState({ name: '' });

  const userDetail = useAuthState();

  function create({ name }) {
    createRoom({ roomName: name, chatName: name }, userDetail.token).then(
      (data) => {
        if (data.status === 'success') {
          createChat({ roomName: name, chatName: name }, userDetail.token).then(
            (chatData) => {
              if (chatData.status === 'success') {
                props.refreshRooms();
                return 'success';
              }
              return 'error';
            },
          );
          return 'success';
        }
        return 'error';
      },
    );
    handleModal();
  }

  return (
    <Layer>
      <Box pad="small">
        <Box>
          <Form
            value={val}
            onChange={(nextValue) => setValue(nextValue)}
            onReset={() => setValue({})}
            onSubmit={({ value }) => create(value)}
          >
            <FormField
              name="name"
              htmlfor="text-input-id"
              label={displayText('Nom de la room')}
            >
              <TextInput id="text-input-id" name="name" value={val.name} />
            </FormField>
            <Box direction="row" gap="medium">
              <Button type="submit" primary label={displayText('Créer')} />
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

CreateRoom.propTypes = {
  handleModal: propTypes.func,
  refreshRooms: propTypes.func,
};

export default CreateRoom;
