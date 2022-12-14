// setup interface to handle user input from stdin
let conn;

const setupInput = function (connection) {
  conn = connection;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === "w") {
    conn.write("Move: up");
  } else if (key === "a") {
    conn.write("Move: left");
  } else if (key === "d") {
    conn.write("Move: right");
  } else if (key === "s") {
    conn.write("Move: down");
  } else if (key === "\u0003") {
    process.exit();
  }
};

module.exports = { setupInput };