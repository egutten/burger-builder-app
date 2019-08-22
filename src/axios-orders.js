import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-465df.firebaseio.com/'
});

export default instance;
