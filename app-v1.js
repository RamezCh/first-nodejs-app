const http = require('http');

// first arg is request second is response, we can name as we like
// function reqListener(req, res) {}

// This fn will be executed whenever a request is made to the
// createServer method returns a server object
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit(); // exits the event loop
  res.setHeader('Content-Type', 'text/html'); // attaches header to response when passing meta data
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end(); // signals that response is complete
});

// listen method is used to listen to incoming requests
// takes port number as arg and hostname as second arg
server.listen(3000); // looping process that keeps on listening to incoming requests
