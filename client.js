const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
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