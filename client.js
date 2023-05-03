const net = require('net');

const client = net.createConnection({ port: 3000 }, () => {
  console.log('Connected to server.');

  // Connect and send your details to the server from the client application
  const student = {
    name: 'John Doe',
    age: 22,
    regNo: 'ABC123',
  };
  client.write(JSON.stringify(student));
});

client.on('data', (data) => {
  // Display the "Thank you" message in the client terminal
  console.log(`Server says: ${data}`);
  client.end();
});

client.on('end', () => {
  console.log('Disconnected from server.');
});
