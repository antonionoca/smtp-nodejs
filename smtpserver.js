const http = require('http');

/**
* Instance of SmtpServer
*/
class SmtpServer {
  /**
  * @param {port} port to listen to.
  */
  start(port = 8025) {
    http.createServer(function(request, response) {
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.end('Hello world');
    }).listen(port);
    console.log(`Server running at http://127.0.0.1:${port}`);
  }
}

const server = new SmtpServer();
server.start();
