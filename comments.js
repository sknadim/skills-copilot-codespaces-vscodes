// Create web server
// 1. Create a new file named comments.js
// 2. Include the http module
// 3. Create a server object
// 4. Listen to a port
// 5. Write a response to the client
// 6. Save the file
// 7. Run the server
// 8. Open a browser and type http://localhost:8080

// 1. Create a new file named comments.js
// 2. Include the http module
var http = require('http');

// 3. Create a server object
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8080);

// 4. Listen to a port
// 5. Write a response to the client
// 6. Save the file

// 7. Run the server
// Open your command prompt and run the file using Node.js
// node comments.js

// 8. Open a browser and type http://localhost:8080
// You will see the text "Hello World!" in the browser.