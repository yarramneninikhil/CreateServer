const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Nikhil Sai");
});
server.listen(4000);
