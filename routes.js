const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"100/><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      // buffer is a global object in node.js
      // it is our bus stop
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      // Blocks code execution until this file is done writing
      fs.writeFileSync('message.txt', message);
    });
    // 302 means redirection
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
};

// global object in node.js
module.exports = requestHandler;

/*
We can export in this way as well:

module.exports = {
    handler: requestHandler,
    someText: 'Some Hard coded text'
};

OR:

module.exports.handler = requestHandler;
module.exports.someText = 'Some Hard coded text';

Which are basically the same 

We can also type exports. directly without module.

exports.handler = requestHandler;
exports.someText = 'Some Hard coded text';
*/
