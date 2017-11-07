import { isEmpty } from '../utils/LangUtils';

export default async function getUser(id, { baseUrl, token }) {
  try {
    const headers = isEmpty(token) ? {} : { Authorization: `Bearer ${token}` };
    const response = await fetch(`${baseUrl}/users/${id}`, {
      headers
    });
    const body = await response.json();
    if (response.status !== 200) throw new Error(body.message);
    return body;
  } catch (error) {
    if (error.message.startsWith('UserService.ERROR_')) throw error;
    throw new Error('UserService.ERROR_UNEXPECTED');
  }
}
