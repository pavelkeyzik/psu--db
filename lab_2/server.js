const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');

app.set('views', './views');
app.use(bodyParser());
app.use("/static", express.static(path.join(__dirname, "public")));
app.set('view engine', 'pug');
app.use(routes);
app.listen(3000 | process.env.PORT);