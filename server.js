const SmtpServer = require('smtp-server').SMTPServer;

class Server {
  constructor(messages) {
    this.messages = messages || [];
  }
  start() {
    const server = new SmtpServer({
      onAuth(auth, session, callback) {
        console.log("onAuth %s, Session %s", auth, session);
        callback();
      },
      onConnect(session, callback) {
        console.log("Connected Session %s", session);
        callback();
      },
      onClose(session) {
        console.log("Closing session %s", session);
      },
      onMailFrom(address, session, callback) {
        this.messages.push(address);
        console.log(this.messages);
        callback();
      },
      onData(stream, session, callback) {
        stream.pipe(process.stdout);
        stream.on("end", callback);
      }
    });

    server.on('error', err => {
      console.log("Error %s", err.message);
    });

    server.listen(8125);
  }
}

const smtpServer = new Server();
smtpServer.start();
