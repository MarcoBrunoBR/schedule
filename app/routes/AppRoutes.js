const TalkController = require('../controllers/TalkController')

let AppRoutes = function (app) {
  this._app = app
  this._talk = new TalkController()

  this._app.get('/talk/new', this._talk.show)
  this._app.post('/talk/new', this._talk.add)
}

module.exports = AppRoutes
