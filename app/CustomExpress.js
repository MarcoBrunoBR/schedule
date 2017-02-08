let CustomExpress = function() {
  this.app = require('express')()

  require('./routes/ApiRoutes')(this.app)
  require('./routes/AppRoutes')(this.app)

  return this.app
}

module.exports = CustomExpress
