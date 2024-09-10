// importing file system module
const fs = require('fs');
// file name, content of file
// Creates it in same directory as index.js
fs.writeFileSync('hello.txt', 'Hello from Node.js!');

// Client browser (JS, HTML, CSS) -> Request on Server (Node.js) in this case -> response 'HTML/JS' file to client browser

// Server does DB connection, user authentication, input validation and business logic

// Client can't directly access the server

// We will use NodeJS to write code on the server side and it is not limited to the server side like utility scripts, build tools..

// Node JS role in Web Dev:
// Run Server / create server & listen to incoming requests
// Business Logic: Handle Requests, Validate Input, Authentication, Authorization, DB operations
// Responses: Rendered HTML, JSON...

// Alternatives to NodeJS:
// Python like Flask, Django
// Ruby like Ruby on Rails
// Java like Spring Boot
// PHP like Laravel
// C# like ASP.NET
