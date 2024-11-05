import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1337/api',
});

export const fetchPosts = async () => {
  try {
    const response = await api.get('/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};