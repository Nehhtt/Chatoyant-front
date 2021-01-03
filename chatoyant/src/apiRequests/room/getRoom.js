import { ROOT_URL } from '../url';

export default async function getRoom(token) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(`${ROOT_URL}/room/getRoom`, requestOptions);
    const data = await response.json();

    if (data.status === 'success') return data;

    return 'error';
  } catch (error) {
    return 'error';
  }
}
