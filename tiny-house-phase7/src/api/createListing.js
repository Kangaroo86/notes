import env from '../env';

export default function createListing(listing) {
  let storedToken = localStorage.getItem('token');

  return fetch(`${env.API_BASE_URL}/listings`, {
    // For when i have userId ready:
    // return fetch(`${env.API_BASE_URL}/users/${userId}/listings`, {
    //
    method: 'POST',
    headers: {
      Authorization: storedToken,
      // Authorization: 'Bearer keyE9lXfaaEAGEG23',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(listing.fields)
  }).then(response => {
    return response.json();
  });
}
