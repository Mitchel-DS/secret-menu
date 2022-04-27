// express setup
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

// handlebars setup
const { engine } = require('express-handlebars');
app.set('view engine', 'hbs');
app.set('views', './views');
app.engine('hbs', engine({
	extname: 'hbs',
	layoutsDir: __dirname + '/views/layouts',
	partialsDir: __dirname + '/views/partials',
}));

// static setup
app.use('/static', express.static('static'));

// database setup
const connectDB = require('./config/db');
require('dotenv').config();
connectDB();

// bodyparser setup
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// routes
const routes = require('./routes');
app.use('/', routes);

// connectie met de port 
app.listen(PORT, () => {
	console.log(`Application listening on port ${PORT}`);
});