import axios from 'axios';

const API_URL = 'https://api.phoenixvc.tech';

export async function fetchData(endpoint: string) {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
