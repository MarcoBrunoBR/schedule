const ScheduleController = require('../controllers/ScheduleController');

function ApiRoutes(app) {
  this._app = app
  this._scheduleController = new ScheduleController();

  this._app.get('/api/all', this._scheduleController.getAll)
}

module.exports = ApiRoutes
