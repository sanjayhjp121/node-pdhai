// Q.  Implement an express application for the following 
// Accept a number from the input text field of a user web page and perform the basic arithmetic operations, increment (++), decrement (-), and square, on the number inside a middleware function of server node.js application.
// Display the output values in the user web page as a response to the click event from the button.



// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// function arithmeticMiddleware(req, res, next) {
//   if (req.body.number) {
//     const number = parseFloat(req.body.number);
//     req.arithmetic = {
//       increment: number + 1,
//       decrement: number - 1,
//       square: number * number,
//     };
//   }
//   next();
// }

// app.get('/', (req, res) => {
//   res.send(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Arithmetic Express App</title>
//       <script>
//         async function handleSubmit(e) {
//           e.preventDefault();
//           const number = parseFloat(document.getElementById("number").value);
//           const response = await fetch('/calculate', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ number }),
//           });
//           const htmlResponse = await response.text();
//           document.getElementById("results").innerHTML = htmlResponse;
//         }
//       </script>
//     </head>
//     <body>
//       <h1>Arithmetic Express App</h1>
//       <form onsubmit="handleSubmit(event)">
//         <label for="number">Enter a number:</label>
//         <input type="number" name="number" id="number" required>
//         <button type="submit">Calculate</button>
//       </form>
//       <ul id="results"></ul>
//     </body>
//     </html>
//   `);
// });

// app.post('/calculate', arithmeticMiddleware, (req, res) => {
//   const { increment, decrement, square } = req.arithmetic;
//   const htmlResponse = `
//     <li>Increment: ${increment}</li>
//     <li>Decrement: ${decrement}</li>
//     <li>Square: ${square}</li>
//   `;
//   res.send(htmlResponse);
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });




// Q.  Create an express application for the following scenario a)
// Create a text file and add student information(Reg. No., Name, Grade) in the server system.
// Accept a file name from the input text field of a user web page and transfer the requested file using sendFile() function from the server as a response to the button click event from the user web page.

// const express = require('express');
// const path = require('path');
// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>File Transfer Express App</title>
//       <script>
//         async function handleSubmit(e) {
//           e.preventDefault();
//           const fileName = document.getElementById("fileName").value;
//           window.location.href = "/download/" + encodeURIComponent(fileName);
//         }
//       </script>
//     </head>
//     <body>
//       <h1>File Transfer Express App</h1>
//       <form onsubmit="handleSubmit(event)">
//         <label for="fileName">Enter the file name:</label>
//         <input type="text" name="fileName" id="fileName" required>
//         <button type="submit">Download</button>
//       </form>
//     </body>
//     </html>
//   `);
// });

// app.get('/download/:fileName', (req, res) => {
//   const fileName = req.params.fileName;
//   const filePath = path.join(__dirname, fileName);
//   res.sendFile(filePath, (err) => {
//     if (err) {
//       res.status(404).send('File not found');
//     }
//   });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });




// Q. Create an express application with the following requirements a)
// Set and clear the cookies for a client using the cookie-parser module in the server application.
// Display the cookie information on the client web page with a click on the show button and clear the cookie information from the system with a click on the reset button on the user web page,

// const express = require('express');
// const cookieParser = require('cookie-parser');
// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(cookieParser());

// app.get('/', (req, res) => {
//   res.send(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Cookie Express App</title>
//       <script>
//         async function handleShow() {
//           const response = await fetch('/show-cookie');
//           const cookie = await response.text();
//           document.getElementById("cookieInfo").innerText = cookie;
//         }

//         async function handleReset() {
//           await fetch('/clear-cookie');
//           document.getElementById("cookieInfo").innerText = '';
//         }
//       </script>
//     </head>
//     <body>
//       <h1>Cookie Express App</h1>
//       <button onclick="handleShow()">Show Cookie</button>
//       <button onclick="handleReset()">Reset Cookie</button>
//       <p>Cookie information: <span id="cookieInfo"></span></p>
//     </body>
//     </html>
//   `);
// });

// app.get('/set-cookie', (req, res) => {
//   res.cookie('sampleCookie', 'This is a sample cookie');
//   res.send('Cookie has been set');
// });

// app.get('/show-cookie', (req, res) => {
//   const cookie = req.cookies.sampleCookie || 'No cookie found';
//   res.send(cookie);
// });

// app.get('/clear-cookie', (req, res) => {
//   res.clearCookie('sampleCookie');
//   res.send('Cookie has been cleared');
// });

// app.use((req, res, next) => {
//   res.status(404).send('Page not found');
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });




// Q.  Create an express application with the following requirements
// Accept Student Name, Reg. no., Roll. No., Mobile No. and Mail Id from the input text fields of a client page and perform a chain of validations on the data using the express-validator module in the server application.
// b)
// Check all the fields are not empty, minimum and maximum lengths of data.
// Add a submit button on the client web page to submit the data and display the warning messages if required.

// const express = require('express');
// const { body, validationResult } = require('express-validator');
// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Validation Express App</title>
//       <script>
//         async function handleSubmit(e) {
//           e.preventDefault();
//           const formData = new FormData(e.target);
//           const data = Object.fromEntries(formData.entries());
//           const response = await fetch('/submit', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//           });
//           const result = await response.json();
//           if (result.errors) {
//             const errorMessage = result.errors.map(error => error.msg).join(', ');
//             document.getElementById("warning").innerText = errorMessage;
//           } else {
//             document.getElementById("warning").innerText = '';
//             alert('Data submitted successfully');
//           }
//         }
//       </script>
//     </head>
//     <body>
//       <h1>Validation Express App</h1>
//       <form onsubmit="handleSubmit(event)">
//         <label for="name">Name:</label>
//         <input type="text" name="name" id="name" >
//         <br>
//         <label for="regNo">Reg. No.:</label>
//         <input type="text" name="regNo" id="regNo" >
//         <br>
//         <label for="rollNo">Roll. No.:</label>
//         <input type="text" name="rollNo" id="rollNo" >
//         <br>
//         <label for="mobileNo">Mobile No.:</label>
//         <input type="text" name="mobileNo" id="mobileNo" >
//         <br>
//         <label for="email">Email:</label>
//         <input type="email" name="email" id="email" >
//         <br>
//         <button type="submit">Submit</button>
//       </form>
//       <p id="warning" style="color: red"></p>
//     </body>
//     </html>
//   `);
// });

// app.post('/submit', [
//   body('name').notEmpty().withMessage('Name is required').isLength({ min: 2, max: 50 }).withMessage('Name should be between 2 and 50 characters'),
//   body('regNo').notEmpty().withMessage('Reg. No. is required').isLength({ min: 1, max: 10 }).withMessage('Reg. No. should be between 1 and 10 characters'),
//   body('rollNo').notEmpty().withMessage('Roll. No. is required').isLength({ min: 1, max: 10 }).withMessage('Roll. No. should be between 1 and 10 characters'),
//   body('mobileNo').notEmpty().withMessage('Mobile No. is required').isLength({ min: 10, max: 15 }).withMessage('Mobile No. should be between 10 and 15 characters').isMobilePhone().withMessage('Invalid mobile number'),
//   body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email address')
// ], (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   } else {
//     res.status(200).json({ message: 'Data submitted successfully' });
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });





// Q. Create a web server application with the http module for the following scenario
// Create a server node. js application using http module to verify whether a number is prime or not.
// Accept a number from the input text field of the client page and provide the output values as a response with the click event on a button.

// const http = require('http');
// const url = require('url');

// const isPrime = (number) => {
//   if (number < 2) return false;
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// };

// const server = http.createServer((req, res) => {
//   const { query } = url.parse(req.url, true);

//   if (req.url.startsWith('/check')) {
//     const number = parseInt(query.number, 10);
//     if (Number.isNaN(number)) {
//       res.writeHead(400, { 'Content-Type': 'text/plain' });
//       res.end('Invalid input');
//     } else {
//       const result = isPrime(number) ? 'prime' : 'not prime';
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       res.end(`The number ${number} is ${result}.`);
//     }
//   } else {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(`
//       <!DOCTYPE html>
//       <html lang="en">
//       <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Prime Number Checker</title>
//         <script>
//           async function checkPrime() {
//             const number = document.getElementById('number').value;
//             const response = await fetch('/check?number=' + number);
//             const result = await response.text();
//             document.getElementById('result').innerText = result;
//           }
//         </script>
//       </head>
//       <body>
//         <h1>Prime Number Checker</h1>
//         <label for="number">Number:</label>
//         <input type="number" id="number" name="number" min="1">
//         <button onclick="checkPrime()">Check</button>
//         <p id="result"></p>
//       </body>
//       </html>
//     `);
//   }
// });

// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });




// Q. Create a web server application with http module for the following scenario
// Create a server node. js application using http module to find the nth Fibonacci number
// a
// Accept a number from the input text field of the client page and provide the output values as a response with the click event on a button.

// const http = require('http');
// const url = require('url');

// const fibonacci = (n) => {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

// const server = http.createServer((req, res) => {
//   const { query } = url.parse(req.url, true);

//   if (req.url.startsWith('/fibonacci')) {
//     const n = parseInt(query.n, 10);
//     if (Number.isNaN(n) || n < 0) {
//       res.writeHead(400, { 'Content-Type': 'text/plain' });
//       res.end('Invalid input');
//     } else {
//       const result = fibonacci(n);
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       res.end(`The Fibonacci number at position ${n} is ${result}.`);
//     }
//   } else {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(`
//       <!DOCTYPE html>
//       <html lang="en">
//       <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Fibonacci Number Finder</title>
//         <script>
//           async function findFibonacci() {
//             const n = document.getElementById('n').value;
//             const response = await fetch('/fibonacci?n=' + n);
//             const result = await response.text();
//             document.getElementById('result').innerText = result;
//           }
//         </script>
//       </head>
//       <body>
//         <h1>Fibonacci Number Finder</h1>
//         <label for="n">Position (n):</label>
//         <input type="number" id="n" name="n" min="0">
//         <button onclick="findFibonacci()">Find Fibonacci Number</button>
//         <p id="result"></p>
//       </body>
//       </html>
//     `);
//   }
// });

// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });





// Q. implement a client-server application with the express, http, and socket.io modules for the following
// scenario
// Display the student details in the server console after getting a request (connection) from a client.
// Broadcast the only odd visitor count from the server to all clients with the new client connections. do e


// const express = require('express');
// const http = require('http');
// const socketIO = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const io = socketIO(server);

// app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// let visitorCount = 0;

// io.on('connection', (socket) => {
//   visitorCount++;
//   console.log(`New client connected (ID: ${socket.id}).`);

//   // Display student details in server console
//   const student = {
//     name: 'John Doe',
//     age: 22,
//     regNo: 'ABC123',
//   };
//   console.log('Student details:', student);

//   // Broadcast odd visitor count to all clients
//   if (visitorCount % 2 !== 0) {
//     io.emit('oddVisitorCount', visitorCount);
//   }

//   socket.on('disconnect', () => {
//     visitorCount--;
//     console.log(`Client disconnected (ID: ${socket.id}).`);
//   });
// });

// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });







// Q. Implement TCP Socket client and server applications with the following criteria.
// Connect and send your details to the server from the client application.
// b)
// Display the student details in the server terminal after getting a request (connection) from a client terminal.
// c)
// Send a "Thank you' message to the client terminal.

// const net = require('net');

// const server = net.createServer((socket) => {
//   console.log('Client connected.');

//   socket.on('data', (data) => {
//     // Display the student details in the server terminal
//     console.log(`Student details received: ${data}`);
    
//     // Send a "Thank you" message to the client terminal
//     socket.write('Thank you');
//   });

//   socket.on('end', () => {
//     console.log('Client disconnected.');
//   });
// });

// server.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });



// Q. Implement a Node js application to connect with the MongoDB for performing the below operations Create a database and add Student collection with the fields- Sid, Name, Subject, Branch, and Mari Add multiple documents with student data
// Sort (in ascending order) the student details with marks and display them in the console window.


// const { MongoClient } = require('mongodb');

// const uri = "mongodb+srv://sanjayhjp121:sanjay123@lpu.njkjvg8.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri);

// (async () => {
//   try {
//     await client.connect();

//     // Create a database
//     const db = client.db('School');

//     // Create a 'Student' collection
//     const studentCollection = db.collection('Student');

//     // Add multiple documents with student data
//     const students = [
//       { Sid: 1, Name: 'Sanjay', Subject: 'Math', Branch: 'CS', Marks: 85 },
//       { Sid: 2, Name: 'Shashank', Subject: 'Math', Branch: 'CS', Marks: 90 },
//       { Sid: 3, Name: 'Prashant', Subject: 'Math', Branch: 'CS', Marks: 95 },
//     ];
//     const insertResult = await studentCollection.insertMany(students);
//     console.log('Inserted students:', insertResult.insertedCount);

//     // Sort the student details by marks (ascending order) and display them in the console window
//     const sortedStudents = await studentCollection
//       .find()
//       .sort({ Marks: 1 })
//       .toArray();
//     console.log('Sorted students by marks (ascending):', sortedStudents);
//   } catch (error) {
//     console.error('Error:', error);
//   } finally {
//     await client.close();
//   }
// })();





// Q. Implement a Node js application to create a writable stream with a new sample. txt file and perform the following tasks
// Find the prime numbers up to 100 and write the values to the sample. txt file with the writable strear
// b)
// Display the message *Task Completed at the end in the console window.


const fs = require('fs');

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

const writeStream = fs.createWriteStream('sample.txt');

for (let i = 2; i <= 100; i++) {
  if (isPrime(i)) {
    writeStream.write(`${i}\n`);
  }
}

writeStream.end();

writeStream.on('finish', () => {
  console.log('Task Completed');
});
