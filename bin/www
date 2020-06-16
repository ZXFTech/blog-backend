require("@babel/register")()

const {SERVICE_CONFIG} = require('../config/server')
const ConnectDB = require('../db/mongoDB')

const app = require('../app')
const http = require('http')
const server = http.createServer(app.callback())
const port = SERVICE_CONFIG.port

ConnectDB().then(async ()=>{

server.listen(8000)
server.on('error',onError)
server.on('listening',onListening)
return
})
.catch((err) => {
console.error('connect database error!')
console.error(err)
return process.exit(1)
})


const normalizePort = (value) => {
  const prot = parseInt(val,10)

  if(isNaN(port)) {
      return val
  }

  if(port >=0) {
      return port
  }

  return false
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

function onListening() {
  var addr = server.address()
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  console.log('Listening on ' + bind)
}
