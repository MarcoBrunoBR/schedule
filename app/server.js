const app = require('./custom-express')
const port = 3000

app.listen(port, () => {
  console.log(`Server in http://localhost:${[port]}`)
  console.log('CTRL + c to quit server')
});
