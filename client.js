// const net = require('net');

// const client = net.createConnection({ port: 3000 }, () => {
//   console.log('Connected to server.');

//   // Connect and send your details to the server from the client application
//   const student = {
//     name: 'John Doe',
//     age: 22,
//     regNo: 'ABC123',
//   };
//   client.write(JSON.stringify(student));
// });

// client.on('data', (data) => {
//   // Display the "Thank you" message in the client terminal
//   console.log(`Server says: ${data}`);
//   client.end();
// });

// client.on('end', () => {
//   console.log('Disconnected from server.');
// });






// const net = require('net');

// const client = new net.Socket();
// const port = 3000;
// const host = 'localhost';

// client.connect(port, host, () => {
//   console.log('Connected to server.');

//   let intervalId;
//   let timeoutId;

//   const sendWowServer = () => {
//     client.write('wow server');
//     console.log('Sent "wow server" to the server.');
//   };

//   const startSending = () => {
//     sendWowServer();
//     intervalId = setInterval(sendWowServer, 2000);
//     timeoutId = setTimeout(stopSending, 12000);
//   };

//   const stopSending = () => {
//     clearInterval(intervalId);
//     console.log('Stopped sending "wow server".');

//     setTimeout(() => {
//       console.log('Resuming sending "wow server" after 5 seconds.');
//       startSending();
//     }, 5000);
//   };

//   startSending();
// });

// client.on('close', () => {
//   console.log('Connection closed.');
// });



