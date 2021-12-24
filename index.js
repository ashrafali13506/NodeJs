const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url === "/test" && req.method == "GET") {
    // res.end("This is Test Page")

    fs.readFile("views/WelcomeBoard.html", (err, data) => {
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile("views/error.html", (err, data) => {
      res.write(data);
      res.end();
    });
  }
});
server.listen(4000);
