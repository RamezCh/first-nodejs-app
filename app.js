// Global Module
const http = require('http');
// Local Module | custom file
const routes = require('./routes');
// Uses requestHandler fn from routes.js
const server = http.createServer(routes);
// Listens on port 3000
server.listen(3000);
