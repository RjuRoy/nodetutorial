const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("his is home page");
    return;
  }
  if (req.url === "/about") {
    res.end("this is about page");
    return;
  }
  res.end(`<h1>Page Not Found</h1>`);
});

server.listen(5000);
