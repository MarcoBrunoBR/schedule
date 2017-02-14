const ScheduleController = require('../controllers/ScheduleController');

 function ApiRoutes(app) {
  this._app = app

  this._app.get('/api/all', ScheduleController.getAll)
}

module.exports = ApiRoutes
