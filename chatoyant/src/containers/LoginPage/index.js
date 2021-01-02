import React from 'react';
import { Button } from 'grommet/components/Button';
import { Form } from 'grommet/components/Form';
import { FormField } from 'grommet/components/FormField';
import { Box } from 'grommet/components/Box';
import { TextInput } from 'grommet/components/TextInput';
import { Text } from 'grommet/components/Text';
import PropTypes from 'prop-types';
import { loginUser, useAuthState, useAuthDispatch } from '../../context';

function LoginPage(props) {
  const [value, setValue] = React.useState({ email: '', passwd: '' });
  const { errorMessage } = useAuthState();

  const dispatch = useAuthDispatch();

  const handleLogin = async () => {
    try {
      const response = await loginUser(dispatch, {
        email: value.email,
        password: value.passwd,
      });
      if (response.status === 'success') {
        props.history.push('/main');
      }
    } catch (error) {
      <Text>{errorMessage}</Text>;
    }
  };

  return (
    <Box fill align="center" justify="center">
      <Box width="medium">
        <Form
          value={value}
          onChange={(nextValue) => setValue(nextValue)}
          onSubmit={({ value: nextValue }) => handleLogin(nextValue)}
        >
          <FormField label="email" name="email" required>
            <TextInput name="email" type="email" />
          </FormField>

          <FormField label="Mot de passe" name="passwd" required>
            <TextInput name="passwd" type="password" />
          </FormField>

          {errorMessage && (
            <Box pad={{ horizontal: 'small' }}>
              <Text color="status-error">{errorMessage}</Text>
            </Box>
          )}

          <Box direction="row" justify="between" margin={{ top: 'medium' }}>
            <Button type="submit" label="Connexion" primary />
          </Box>
        </Form>
      </Box>
    </Box>
  );
}

LoginPage.propTypes = {
  history: PropTypes.object,
};

export default LoginPage;
