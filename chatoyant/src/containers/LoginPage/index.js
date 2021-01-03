import React from 'react';
import { Button } from 'grommet/components/Button';
import { Form } from 'grommet/components/Form';
import { FormField } from 'grommet/components/FormField';
import { Box } from 'grommet/components/Box';
import { TextInput } from 'grommet/components/TextInput';
import { Text } from 'grommet/components/Text';
import PropTypes from 'prop-types';
import displayText from '../../utils/languages';
import { Loader } from '../../components/atoms';
import { loginUser, useAuthState, useAuthDispatch } from '../../context';

function LoginPage(props) {
  const [value, setValue] = React.useState({ email: '', passwd: '' });
  const { errorMessage } = useAuthState();
  const [loading, setLoading] = React.useState(false);

  const dispatch = useAuthDispatch();

  const handleLogin = () => {
    setLoading(true);
    loginUser(dispatch, {
      email: value.email,
      password: value.passwd,
    }).then((response) => {
      if (response.status === 'success') {
        setLoading(false);
        props.history.push('/main');
      }
    });
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

              {errorMessage && (
                <Box pad={{ horizontal: 'small' }}>
                  <Text color="status-error">{errorMessage}</Text>
                </Box>
              )}

              <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                <Button
                  type="submit"
                  label={displayText('Connexion')}
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

LoginPage.propTypes = {
  history: PropTypes.object,
};

export default LoginPage;
