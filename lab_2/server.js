const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');
const errorHandler = require('./helpers/error-handler');

app.set('views', './views');
app.use(bodyParser());
app.use("/static", express.static(path.join(__dirname, "public")));
app.set('view engine', 'pug');
app.use(routes);
app.use(errorHandler);
app.listen(3000 | process.env.PORT);