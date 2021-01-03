import React from 'react';
import { Button } from 'grommet/components/Button';
import { Form } from 'grommet/components/Form';
import { FormField } from 'grommet/components/FormField';
import { Box } from 'grommet/components/Box';
import { TextInput } from 'grommet/components/TextInput';
import { Text } from 'grommet/components/Text';
import PropTypes from 'prop-types';
import { Loader } from '../../components/atoms';
import { signUpUser, useAuthState, useAuthDispatch } from '../../context';
import displayText from '../../utils/languages';

function SignUpPage(props) {
  const [value, setValue] = React.useState({ email: '', passwd: '', name: '' });
  const [loading, setLoading] = React.useState(false);
  const message =
    value.passwd.length < 8 ? 'Mot de passe minimum 8 caractères' : undefined;
  const { errorMessage } = useAuthState();

  const dispatch = useAuthDispatch();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await signUpUser(dispatch, {
        email: value.email,
        password: value.passwd,
        userName: value.name,
      });
      if (response.status === 'success') {
        setLoading(false);
        props.history.push('/login');
      }
    } catch (error) {
      <Text>{errorMessage}</Text>;
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Box fill align="center" justify="center">
          <Box width="medium">
            <Form
              value={value}
              onChange={(nextValue) => setValue(nextValue)}
              onSubmit={({ value: nextValue }) => handleLogin(nextValue)}
            >
              <FormField label={displayText('Nom')} name="name" required>
                <TextInput name="name" type="text" />
              </FormField>
              <FormField label={displayText('email')} name="email" required>
                <TextInput name="email" type="email" />
              </FormField>
              <FormField
                label={displayText('Mot de passe')}
                name="passwd"
                required
              >
                <TextInput name="passwd" type="password" />
              </FormField>

              {message && (
                <Box pad={{ horizontal: 'small' }}>
                  <Text color="status-error">{displayText(message)}</Text>
                </Box>
              )}
              {errorMessage && (
                <Box pad={{ horizontal: 'small' }}>
                  <Text color="status-error">{displayText(errorMessage)}</Text>
                </Box>
              )}
              <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                <Button
                  type="submit"
                  label={displayText('Inscription')}
                  primary
                />
              </Box>
            </Form>
          </Box>
        </Box>
      )}
    </>
  );
}

SignUpPage.propTypes = {
  history: PropTypes.object,
};

export default SignUpPage;
