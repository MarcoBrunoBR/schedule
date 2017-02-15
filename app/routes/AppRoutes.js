const TalkController = require('../controllers/TalkController')

function AppRoutes(app) {
  this._app = app

  this._app.get('/talk/new', TalkController.show)
  this._app.post('/talk/new', TalkController.add)
}

module.exports = AppRoutes
