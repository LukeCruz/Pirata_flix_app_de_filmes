const express = require('express');
const moviesController = require('../controllers/moviesController');

const routes = express.Router();

routes.get('/test', moviesController.getTest);
routes.get('/movies', moviesController.getAllMovies);
routes.get('/moviepopular', moviesController.getTitleMoviePopular);

module.exports = routes;
