module.exports = function(app) {
	// API
	//app.use('/api/todos', require('./routes/todo'));

	// Site
	app.use('/', require('./routes/site'));

};