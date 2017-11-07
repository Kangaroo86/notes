import env from '../env';

export default function getListings() {
  return fetch(
    `${env.API_BASE_URL}/listings`,
    {
      // method: 'GET',
      // headers: {
      //   Authorization: 'Bearer keyE9lXfaaEAGEG23',
      // 'Content-Type': 'application/json'
    }
  ).then(response => {
    return response.json();
  });
}
