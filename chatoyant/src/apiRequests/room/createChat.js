import { ROOT_URL } from '../url';

export default async function createChat(payload, token) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  };

  try {
    const response = await fetch(`${ROOT_URL}/room/createChat`, requestOptions);
    const data = await response.json();

    if (data.status === 'success') return data;
    return 'error';
  } catch (error) {
    throw new Error('error on chat creation');
  }
}
