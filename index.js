const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hello World");
});

server.listen(6060, function () {
  console.log("Server is running on port 6060");
});
