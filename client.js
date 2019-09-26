const net = require('net');
const client = net.createConnection({port: 8025}, () => {
  // 'connect' listener
  console.log('connected to server');
  client.write('sent ping message');
});
client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});
client.on('end', () => {
  console.log('disconnected from server');
});
