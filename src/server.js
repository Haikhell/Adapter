const http = require('http');
const app = require('./app');
const config = require('./config/config');

(() => {
  const httpServer = http.createServer(app);

  httpServer.on('listening', () => console.log(`http://${config.HOST}:${config.PORT}/`));

  httpServer.listen(config.PORT, config.HOST);
})();
