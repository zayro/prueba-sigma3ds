const app = require('./app')
const config = require('./config')

app.listen(config.port, () => {
  console.log(`API REST corriendo en el puerto ${config.port}`)
})