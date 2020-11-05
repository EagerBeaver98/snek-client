const net = require('net');
const {IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    IP,
    PORT
  });
  conn.on('connect', () => {
    console.log("Connection established to game server");
  });
  conn.setEncoding('utf8');
  conn.write("Name: OKE");
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };