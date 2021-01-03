import { ROOT_URL } from '../url';

export default async function createRoom(payload, token) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  };

  try {
    const response = await fetch(`${ROOT_URL}/room/createRoom`, requestOptions);
    const data = await response.json();

    if (data.status === 'success') return data;

    return 'error';
  } catch (error) {
    return 'error';
  }
}
