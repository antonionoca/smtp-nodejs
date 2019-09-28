import Handler from './handler.js';

const net = require('net');

/**
* Instance of SmtpServer
*/
class SmtpServer {
  /**
  * @param {messages} messages stored by the fake smtp server
  * @param {handler} handler of connection events
  */
  constructor(messages, handler) {
    this.messages = messages || [];
    this.handler = handler || new Handler();
  }

  /**
  * @param {port} port to listen to.
  */
  start(port = 8125) {
    net.createServer((c) => {
      console.log('client connected');
      c.on('data', (data) => this.handler.onData(data));
      c.on('end', () => this.handler.onClientEnd());
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
