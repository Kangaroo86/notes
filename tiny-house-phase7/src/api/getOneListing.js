import env from '../env';

export default function getOneListing(listingId) {
  let storedToken = localStorage.getItem('token');
  return fetch(`${env.API_BASE_URL}/listings/${listingId}`, {
    method: 'GET',
    headers: {
      Authorization: storedToken,
      // Authorization: 'Bearer keyE9lXfaaEAGEG23',
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      console.log('RESPONSE', response);
      return response.json();
    })
    .catch(err => {
      console.log('THE_ERR', err);
    });
}
