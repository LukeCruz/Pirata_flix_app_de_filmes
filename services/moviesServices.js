const axios = require('axios');

const KEY_PASS = 'b188aaff3eb311055dd615f9874308f2';

const url = `https://api.themoviedb.org/3/movie/popular?api_key=${KEY_PASS}&language=en-US&page=1`;

const moviesServices = {

  getTest: () => {
    const test = 'testando rotas';
    return test;
  },

  getAllMovies: async () => {
    const result = await axios.get(url);
    const object = result.data.results;
    return object;
  },

  getOneMovie: async () => {
    const result = await axios.get(url);
    const object = result.data.results;
    return object;
  },

  getTitleMoviePopular: async () => {
    const result = await axios.get(url);
    const object = result.data.results[0].title;
    return object;
  },

  getImageMovie: async () => {
    const result = await axios.get(url);
    const object = result.data.results;
    console.log(`funcionou no services, retorno >> ${object}`);
    return object;
  },

  getOverViewMovie: async () => {
    const result = await axios.get(url);
    const object = result.data.results;
    console.log(`funcionou no services, retorno >> ${object}`);
    return object;
  },

};

module.exports = moviesServices;
