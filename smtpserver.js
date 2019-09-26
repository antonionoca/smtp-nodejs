const net = require('net');

/**
* Instance of SmtpServer
*/
class SmtpServer {
  /**
  * @param {messages} messages stored by the fake smtp server
  */
  constructor(messages) {
    this.messages = messages || [];
  }

  /**
  * @param {port} port to listen to.
  */
  start(port = 8025) {
    net.createServer((c) => {
      console.log('client connected');
      c.on('data', (data) => {
        const msg = data.toString();
        this.messages.push(msg);
        console.log(msg);
      });
      c.on('end', () => {
        console.log('client disconnected');
      });
      c.write('server response');
      c.pipe(c);
    }).listen(port, () => {
      console.log(`Server bound at port ${port}`);
    });
  }
  /**
  * Get captured email messages
  * @return messages array
  */
  getMessages() {
    return this.messages;
  }
}

const server = new SmtpServer();
server.start();

setInterval(function() {
  console.log(JSON.stringify(server.getMessages()));
}, 3000);
