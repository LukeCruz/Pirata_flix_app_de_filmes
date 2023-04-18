const moviesServices = require('../services/moviesServices');

const moviesController = {

  getTest: async (_req, res) => {
    const test = await moviesServices.getTest();
    return res.status(200).json(test);
  },

  getAllMovies: async (_req, res) => {
    const popularMovies = await moviesServices.getAllMovies();
    if (!popularMovies) {
      return res.status(404).send({ message: 'movies not found' });
    } return res.status(200).json(popularMovies);
  },

  getTitleMoviePopular: async (_req, res) => {
    const popularTitle = await moviesServices.getTitleMoviePopular();
    if (!popularTitle) {
      return res.status(404).send({ message: 'movies not found' });
    } return res.status(200).send(popularTitle);
  },
};

module.exports = moviesController;
