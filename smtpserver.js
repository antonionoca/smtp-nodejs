const net = require('net');

/**
* Instance of SmtpServer
*/
class SmtpServer {
  /**
  * @param {port} port to listen to.
  */
  start(port = 8025) {
    net.createServer((c) => {
      console.log('client connected');
      c.on('end', () => {
        console.log('client disconnected');
      });
      c.write('hello world\r\n');
      c.pipe(c);
    }).listen(port, () => {
      console.log(`Server bound at port ${port}`);
    });
  }
}

const server = new SmtpServer();
server.start();
