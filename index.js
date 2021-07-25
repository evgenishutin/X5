const express = require('express');
const { PORT } = require('./config/constants');
const routers = require('./routes/routes');

const app = express();

app.use(express.json());
app.use('/', routers);

module.exports = app;

app.listen(PORT, () =>
  console.log(`Server is listening on ${PORT}`)
);