const controller = require('../controllers/main.controller');

module.exports = (app) => {
	app.use('/api/request', controller.request);
};