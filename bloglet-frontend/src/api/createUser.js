export default function createUser(attributes, { baseUrl }) {
  return fetch(`${baseUrl}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(attributes)
  }).then(response => response.json());
}
