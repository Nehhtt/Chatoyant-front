/* eslint-disable consistent-return */
/* eslint-disable no-console */
const ROOT_URL = 'https://chatoyant-back.herokuapp.com';

// eslint-disable-next-line consistent-return
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
    console.log(data);

    if (data.data.user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      localStorage.setItem('currentUser', JSON.stringify(data));
      return data;
    }

    dispatch({ type: 'LOGIN_ERROR', error: data.status });
    // eslint-disable-next-line consistent-return
    return;
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error });
  }
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
    console.log(data);

    if (data.user) {
      dispatch({ type: 'SIGNUP_SUCCESS', payload: data });
      localStorage.setItem('currentUser', JSON.stringify(data));
      return data;
    }

    dispatch({ type: 'SIGNUP_ERROR', error: data.errors[0] });
    // eslint-disable-next-line consistent-return
    return;
  } catch (error) {
    dispatch({ type: 'SIGNUP_ERROR', error });
  }
}

export async function logout(dispatch) {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
}
