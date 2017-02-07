const ScheduleController = require('../controllers/ScheduleController');

let ApiRoutes = function(app) {
  this._app = app
  this._scheduleController = new ScheduleController();

  this._app.get('/api/all', this._scheduleController.getAll)
}

module.exports = ApiRoutes
