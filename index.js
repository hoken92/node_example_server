const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.write('<h1 style="color: red">Hello World!</h1>');
      res.write("<p>I wonder what else we can send...</p>");
      res.end();
      break;

    case "/make-dough":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.write(
        '<h1 style="color: lightblue">This is the best recipe for...</h1>'
      );
      res.write("<p>Step one: Find some magic..</p>");
      res.end();
      break;

    case "/gacha":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");

      const itemArray = [
        "Gold Bar",
        "Chicken Nugget",
        "Try Again",
        "Golden Ticket",
        "Action Figure",
      ];
      const randomItem =
        itemArray[Math.floor(Math.random() * itemArray.length)];
      res.write(
        '<h1 style="color: green">A random Gacha game on refresh!</h1>'
      );
      res.write("<p>You have received a </p>");
      res.write(`<span>${randomItem}!</span>`);
      res.end();
      break;

    default:
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.write("<h1>This page does not exist!</h1>");
      res.write(
        "<p>Please use the below url parameters to visit our webpages!</p>"
      );
      res.write("<ul><li>/</li><li>/make-dough</li><li>/gacha</li></ul>");
      res.end();
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
