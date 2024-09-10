const http = require('http');

// first arg is request second is response, we can name as we like
// function reqListener(req, res) {}

// This fn will be executed whenever a request is made to the
// createServer method returns a server object
const server = http.createServer((req, res) => {
  console.log(req);
});

// listen method is used to listen to incoming requests
// takes port number as arg and hostname as second arg
server.listen(3000); // looping process that keeps on listening to incoming requests
