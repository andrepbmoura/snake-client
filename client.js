const net = require('net');
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('data', (data) => {
    console.log(data); // output when a data is received, usually when the user is not moving.
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server'); // Output connected if the connection is established
    conn.write('Name: APM'); // Output the username
  });

  conn.on('connect', () => {
    const interval = setInterval(() => {
    }, 50)
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  // return the connection
  return conn;
}

module.exports = { connect }; // exports the connect function to be available globally
