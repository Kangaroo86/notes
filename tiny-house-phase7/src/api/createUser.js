import env from '../env';

export default function createUser(newUser) {
  return fetch(`${env.API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      //   Authorization: 'Bearer keyE9lXfaaEAGEG23',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  }).then(response => {
    console.log('RESPONSE', response);
    return response.json();
  });
}
