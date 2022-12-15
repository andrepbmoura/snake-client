const { Up, Down, Left, Right, Msg1, Msg2, Msg3, quit } = require('./constants');

let conn;

// setup interface to handle user input from stdin
const setupInput = function (connection) {
  conn = connection;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// handles user input from stdin with the callback function
const handleUserInput = function(key) {
  if (key === Msg1) {
    conn.write("Say: LOL");
  } else if (key === Msg2) {
    conn.write("Say: WoW");
  } else if (key === Msg3) {
    conn.write("Say: -_-");
  } else if (key === Up) {
    conn.write("Move: up");
  } else if (key === Down) {
    conn.write("Move: down");
  } else if (key === Left) {
    conn.write("Move: left");
  } else if (key === Right) {
    conn.write("Move: right");
  } else if (key === quit) {
    process.exit();
  }
};

module.exports = { setupInput }; //exports setupInput to be available globally