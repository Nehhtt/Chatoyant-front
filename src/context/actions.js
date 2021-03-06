const ROOT_URL = 'https://chatoyant-back.herokuapp.com';

export async function loginUser(dispatch, loginPayload) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginPayload),
  };

  try {
    dispatch({ type: 'REQUEST_LOGIN' });
    const response = await fetch(`${ROOT_URL}/auth/login`, requestOptions);
    const data = await response.json();
    if (data.data) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data.data });
      localStorage.setItem('currentUser', JSON.stringify(data));
      return data;
    }

    dispatch({ type: 'LOGIN_ERROR', error: data.error.message });
    return 'error';
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error });
  }
  return 'success';
}

export async function signUpUser(dispatch, signUpPayload) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signUpPayload),
  };
  try {
    dispatch({ type: 'REQUEST_SIGNUP' });
    const response = await fetch(`${ROOT_URL}/auth/signup`, requestOptions);
    const data = await response.json();

    if (data.data) {
      dispatch({ type: 'SIGNUP_SUCCESS', payload: data });
      localStorage.setItem('currentUser', JSON.stringify(data));
      return data;
    }

    dispatch({ type: 'SIGNUP_ERROR', error: data.error.message });
    // eslint-disable-next-line consistent-return
    return;
  } catch (error) {
    dispatch({ type: 'SIGNUP_ERROR', error });
  }
  return 'success';
}

export async function logout(dispatch) {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
}
