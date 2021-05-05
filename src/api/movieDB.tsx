import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'eb86885cdab5497e85c4635d0da00dda',
    language: 'es-ES',
  },

  headers: {
    Accept: 'application/json',
  },
});

export default movieDB;
