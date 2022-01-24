require('dotenv').config({ path: `${__dirname}/.env` });

const ENV = process.env;

module.exports = Object.freeze({
  HOST: ENV.HOST || '127.0.0.1',
  PORT: ENV.PORT ? +ENV.PORT : 4041,
});
