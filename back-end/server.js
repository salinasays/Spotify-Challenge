const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./models');
const router = require('./routes/index.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));


db.sequelize.sync().then(() => {
	app.use('/api', router);
	app.get('/*', function(req, res){
		res.sendFile(path.join(__dirname, '../views/index.html'))
	});

	const port = process.env.PORT || 8888;

	app.listen(port, () => {
		console.log('Listening on port 8888');
	});
});

module.exports = app; 