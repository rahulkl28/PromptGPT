import axios from 'axios';

let isConnected = false; // track the connection

export const connectToDB = async () => {
  if (isConnected) {
    console.log('Django API is already connected');
    return;
  }

  try {
    // Update the URL to point to your Django API endpoint
    const response = await axios.get('http://localhost:8000/api/items/');
    console.log('Django API connected', response.data);

    isConnected = true;
  } catch (error) {
    console.error(error);
  }
};