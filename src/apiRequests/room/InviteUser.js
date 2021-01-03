import { ROOT_URL } from '../url';

export default async function inviteUser(payload, token) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  };

  try {
    const response = await fetch(`${ROOT_URL}/room/inviteUser`, requestOptions);
    const data = await response.json();

    if (data.status === 'success') return data;

    return data.error.message;
  } catch (error) {
    return 'error';
  }
}
