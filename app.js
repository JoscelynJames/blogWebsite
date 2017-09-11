const express = require('express');
const app = express();
const mustache = require('mustache');
const port = process.env.PORT || 3210;
const routes = require('./routes/routes.js');

app.use(routes);
app.set('view engine', 'mustache');

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
