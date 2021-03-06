let express = require('express')
let app = express()

app.set('view engine', 'ejs')
app.use(express.static('assets'))

require('./routes/ApiRoutes')(app)
require('./routes/AppRoutes')(app)

module.exports = app
