/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-multi-assign */
const moviesServices = require('../services/moviesServices');

const re = new Promise((resolve, reject) => {
   const popularMovie = moviesServices.getTitleMoviePopular();

   if (!popularMovie) {
      reject('failed');
    } else {
      resolve(popularMovie);
    }
  });

re.then((message) => {
  const test = message;
  const texto = `<strong>${test}</strong>`;
  document.getElementById('div').innerHTML = texto;
  console.log(message);
}).catch((err) => {
  console.log(err);
});
