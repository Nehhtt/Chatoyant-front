const ROOT_URL = 'https://chatoyant-back.herokuapp.com';

export default async function createRoom(payload, token) {
    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      };

      // eslint-disable-next-line no-console
      console.log(payload)
    
      try {
        const response = await fetch(`${ROOT_URL}/room/createRoom`, requestOptions);
        const data = await response.json();

        if (data.status === "success")
            return data

        return 'error'
      } catch (error) {
        throw new Error("error on room creation")
      }
}