const http = require('http');
http.createServer((req, res) => res.end('Hello from CI/CD version 1'))
  .listen(process.env.PORT || 8080);
