const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const promisify = require('es6-promisify');

require('dotenv').config();
require('./models/User');
require('./models/Diary');

const routes = require('./routes/routes');

const app = express();

mongoose.connect(process.env.DB_URL);
mongoose.promise = global.Promise // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`Mongoose connect error: ${err.message}`);
});


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running on Port ${server.address().port}`);
})