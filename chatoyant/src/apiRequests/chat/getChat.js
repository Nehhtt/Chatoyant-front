/* eslint-disable no-console */
const ROOT_URL = 'https://chatoyant-back.herokuapp.com';

export default async function getChat(token, chatName) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(
      `${ROOT_URL}/room/getChat?chatName=${chatName}`,
      requestOptions,
    );
    const data = await response.json();

    if (data.status === 'success') return data;

    return 'error';
  } catch (error) {
    console.log(error);
    return error;
  }
}
