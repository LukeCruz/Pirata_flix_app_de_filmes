const express = require('express');

const routes = require('./routes/routes');

const PORT = process.env.PORT || 6000;

const app = express();

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {});

module.exports = app;
