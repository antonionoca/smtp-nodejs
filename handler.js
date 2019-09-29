/**
* Connection handler.
*/
module.exports = class Handler {
  /**
  * Handle data transmission event
  * @param {data} data transmitted by the client
  */
  onData(data) {
    const msg = data.toString();
    this.messages.push(msg);
    console.log(JSON.stringify(server.getMessages()));
  }
  /**
  * Handle end of transmission by the client.
  */
  onClientEnd() {
    console.log('client disconnected');
  }
}
