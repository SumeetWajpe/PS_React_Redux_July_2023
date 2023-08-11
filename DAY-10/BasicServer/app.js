const http = require("http");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("Index.html", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/html");
        res.end("Something went wrong !");
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    });
  } else if (req.url == "/styles.css") {
    fs.readFile("styles.css", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/css");
        res.end("Something went wrong !");
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/css");
        res.end(data);
      }
    });
  } else if (req.url == "/products") {
    let products = [
      { id: 1, title: "Macbook" },
      { id: 2, title: "Shoes" },
    ];
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    res.end(JSON.stringify(products));
  } else {
    res.statusCode = 404;
    res.end("Resource Not Found !");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
