const net = require("net");
const { connected } = require("process");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.on("data", () => {
    console.log("you ded cuz you idled"); //output a message from the server
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server"); //Output connected if the connection is established
    conn.write("Name: APM"); //Output the username 
  });

  conn.on("connect", () => {
    const interval = setInterval(() => {
      //conn.write("Move: up");
    }, 50)
  });  

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect }; //exports the connect function