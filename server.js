require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

const { engine } = require('express-handlebars');
app.set('view engine', 'hbs');
app.set('views', './views');
app.engine('hbs', engine({
	extname: 'hbs',
	layoutsDir: __dirname + '/views/layouts',
	partialsDir: __dirname + '/views/partials',
}));

app.use('/public', express.static('public'));

const connectDB = require('./config/db');
connectDB();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const routes = require('./routes');
app.use('/', routes);

app.listen(PORT, () => {
	console.log(`Application listening on port ${PORT}`);
});