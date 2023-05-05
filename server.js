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

// const uri = "mongodb+srv://akashmishra:akash123@lpu.njkjvg8.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri);

// (async () => {
//   try {
//     await client.connect();

//     // Create a database
//     const db = client.db('room');

//     // Create a 'Student' collection
//     const studentCollection = db.collection('Student');

//     // Add multiple documents with student data
//     const students = [
//       { Sid: 1, Name: 'Sanjay', HNo: 1, Furniture: 'ABC', Rent: 1000 },
//       { Sid: 2, Name: 'Shashank', HNo: 2, Furniture: 'DEF', Rent: 2000 },
//       { Sid: 3, Name: 'Prashant', HNo: 3, Furniture: 'GHI', Rent: 3000 },
//     ];
//     const insertResult = await studentCollection.insertMany(students);
//     console.log('Inserted students:', insertResult.insertedCount);

//     // Sort the student details by marks (ascending order) and display them in the console window
//     const sortedStudents = await studentCollection
//       .find()
//       .sort({ Rent: 1000 })
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


// const fs = require('fs');

// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// const writeStream = fs.createWriteStream('sample.txt');

// for (let i = 2; i <= 100; i++) {
//   if (isPrime(i)) {
//     writeStream.write(`${i}\n`);
//   }
// }

// writeStream.end();

// writeStream.on('finish', () => {
//   console.log('Task Completed');
// });





// Q. Set cookie and read cookie usage 

// const express = require('express');
// const cookieParser = require('cookie-parser');

// const app = express();

// // Add Cookie Parser middleware
// app.use(cookieParser());

// // Define a route that sets a cookie
// app.get('/set-cookie', (req, res) => {
//   res.cookie('name', 'John Doe', { maxAge: 900000, httpOnly: true });
//   res.send('Cookie set!');
// });

// // Define a route that reads a cookie
// app.get('/read-cookie', (req, res) => {
//   const name = req.cookies.name;
//   res.send(`Hello, ${name}!`);
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });






// // Include http module to create a server application and use the fs module to duplicate the original. txt file as the duplicate. txt file in the server with the client(user) request from the browser. Create a source.txt file and add personal information (name, city, state) in the server system for duplication.

// // Require the necessary modules
// const http = require('http');
// const fs = require('fs');

// // Create a new HTTP server
// const server = http.createServer((req, res) => {
//   // Handle HTTP requests
//   if (req.url === '/duplicate') {
//     // Read the source.txt file
//     fs.readFile('source.txt', (err, data) => {
//       if (err) {
//         console.error(err);
//         res.writeHead(500, { 'Content-Type': 'text/plain' });
//         res.end('Internal Server Error');
//       } else {
//         // Write the data to the duplicate.txt file
//         fs.writeFile('duplicate.txt', data, (err) => {
//           if (err) {
//             console.error(err);
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.end('Internal Server Error');
//           } else {
//             // Send a success response
//             res.writeHead(200, { 'Content-Type': 'text/plain' });
//             res.end('File duplicated successfully');
//           }
//         });
//       }
//     });
//   } else {
//     // Send a not found response
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Not Found');
//   }
// });

// // Start the server and listen on a port
// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });







// // Q. Create a node.js web server application with the http module to perform the search operation on a given set of values. Accept a series of values from the input text fields of the client page and provide the output values as a response with the click event on a button.


// // Require the necessary modules
// const http = require('http');
// const url = require('url');

// // Define the set of values to search
// const values = ['apple', 'banana', 'orange', 'grape', 'watermelon'];

// // Create a new HTTP server
// const server = http.createServer((req, res) => {
//   // Handle HTTP requests
//   const urlParts = url.parse(req.url, true);
//   if (urlParts.pathname === '/') {
//     // Serve the HTML page
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(`
//       <!DOCTYPE html>
//       <html>
//       <head>
//         <title>Search Values</title>
//       </head>
//       <body>
//         <label for="search-input">Search:</label>
//         <input type="text" id="search-input">
//         <button id="search-button">Search</button>

//         <ul id="result-list"></ul>

//         <script>
//           const searchButton = document.getElementById('search-button');
//           searchButton.addEventListener('click', () => {
//             const searchInput = document.getElementById('search-input').value;
//             const request = new XMLHttpRequest();
//             request.onreadystatechange = () => {
//               if (request.readyState === 4 && request.status === 200) {
//                 const resultList = document.getElementById('result-list');
//                 resultList.innerHTML = '';
//                 const values = JSON.parse(request.responseText);
//                 for (const value of values) {
//                   const li = document.createElement('li');
//                   li.innerText = value;
//                   resultList.appendChild(li);
//                 }
//               }
//             };
//             request.open('GET', \`/search?query=\${searchInput}\`);
//             request.send();
//           });
//         </script>
//       </body>
//       </html>
//     `);
//     res.end();
//   } else if (urlParts.pathname === '/search') {
//     const query = urlParts.query.query.toLowerCase();
//     const results = values.filter((value) => value.includes(query));
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(results));
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Not Found');
//   }
// });

// // Start the server and listen on a port
// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });









// // Q. Implement a Node.js application to create a readable stream with an employee.txt file (add basic employee details in the file. Read the student details from the above stream and send the data as a response to the client request from the browser.

// const fs = require('fs');
// const http = require('http');

// // Create a readable stream
// const readableStream = fs.createReadStream('employee.txt');

// // Create a HTTP server
// const server = http.createServer((req, res) => {
//   // Set the response headers
//   res.setHeader('Content-Type', 'text/plain');
//   res.setHeader('Access-Control-Allow-Origin', '*');

//   // Send the employee details as a response
//   readableStream.pipe(res);
// });

// // Start the server and listen on a port
// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });








// // Q. Create a node.js web server application with the HTTP module to perform sort operations on a given set of values. Accept a series of values from the input text fields of the client page and provide the output values as a response with the click event on a button.
// const http = require('http');
// const url = require('url');

// // Create a HTTP server
// const server = http.createServer((req, res) => {
//   const { pathname, query } = url.parse(req.url, true);

//   // Serve the HTML page for entering the input values
//   if (pathname === '/') {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>Sort Values</title></head>');
//     res.write('<body>');
//     res.write('<label for="values">Enter comma-separated values:</label>');
//     res.write('<input type="text" id="values">');
//     res.write('<button id="sort">Sort</button>');
//     res.write('<p id="result"></p>');
//     res.write('<script>');
//     res.write('const sortBtn = document.getElementById("sort");');
//     res.write('sortBtn.addEventListener("click", () => {');
//     res.write('const values = document.getElementById("values").value;');
//     res.write('const request = new XMLHttpRequest();');
//     res.write('request.onreadystatechange = () => {');
//     res.write('if (request.readyState === 4 && request.status === 200) {');
//     res.write('const result = document.getElementById("result");');
//     res.write('result.innerText = request.responseText;');
//     res.write('}');
//     res.write('};');
//     res.write('request.open("POST", "/sort");');
//     res.write('request.send(values);');
//     res.write('});');
//     res.write('</script>');
//     res.write('</body>');
//     res.write('</html>');
//     return res.end();
//   } else if (pathname === '/sort') {
//     // Get the input values from the request body
//     let requestBody = '';
//     req.on('data', chunk => {
//       requestBody += chunk.toString();
//     });
//     req.on('end', () => {
//       const values = requestBody.split(',').map(Number);

//       // Sort the values in ascending order
//       const sortedValues = values.sort((a, b) => a - b);

//       // Send the sorted values as a response
//       res.setHeader('Content-Type', 'text/plain');
//       res.end(sortedValues.toString());
//     });
//   } else {
//     // Send a 404 error response for invalid requests
//     res.statusCode = 404;
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>404 Not Found</title></head>');
//     res.write('<body><h1>404 Not Found</h1></body>');
//     res.write('</html>');
//     return res.end();
//   }
// });

// // Start the server and listen on a port
// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });






// // Q. a) Implement a Node.js application to connect with MongoDB to Create a database and add car collection with the fields- Model, Company, Mileage, color, and Owner. Add multiple documents with Employee data. Finally, Query the above collection to find employees with more than a specific salary and display it in the console window.

// const { MongoClient } = require('mongodb');

// const uri = 'mongodb+srv://sanjayhjp121:sanjay123@cluster0.m37detm.mongodb.net/?retryWrites=true&w=majority';

// // Replace <username>, <password>, <cluster>, and <dbname> with your own values

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(err => {
//   if (err) throw err;

//   const db = client.db('<dbname>');

//   // Create a car collection with some fields
//   const carCollection = db.collection('car');
//   const cars = [
//     { model: 'Model S', company: 'Tesla', mileage: 60000, color: 'Black', owner: 'John' },
//     { model: 'Fiesta', company: 'Ford', mileage: 30000, color: 'Blue', owner: 'Jane' },
//     { model: 'Camry', company: 'Toyota', mileage: 50000, color: 'Red', owner: 'Bob' },
//     { model: 'Accord', company: 'Honda', mileage: 40000, color: 'White', owner: 'Alice' }
//   ];

//   // Insert multiple documents into the car collection
//   carCollection.insertMany(cars, (err, result) => {
//     if (err) throw err;

//     // Query the car collection to find employees with more than a specific salary
//     const minMileage = 50000;
//     carCollection.find({ mileage: { $gt: minMileage } }).toArray((err, docs) => {
//       if (err) throw err;

//       console.log(`Cars with mileage greater than ${minMileage}:`);
//       console.log(docs);

//       // Close the MongoDB connection
//       client.close();
//     });
//   });
// });







//  Q. a) Implement a Node.js application to connect with MongoDB to Create a database and add car collection with the fields- Model, Company, Mileage, color, and Owner. Add multiple documents with Employee data. Finally, Query the above collection to find employees with more than a specific salary and display it in the console window.

// const { MongoClient } = require('mongodb');

// const uri = 'mongodb+srv://sanjayhjp121:sanjay123@cluster0.m37detm.mongodb.net/?retryWrites=true&w=majority';

// // Replace <username>, <password>, <cluster>, and <dbname> with your own values

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(err => {
//   if (err) throw err;

//   const db = client.db('<dbname>');

//   // Create a car collection with some fields
//   const carCollection = db.collection('car');
//   const cars = [
//     { model: 'Model S', company: 'Tesla', mileage: 60000, color: 'Black', owner: 'John' },
//     { model: 'Fiesta', company: 'Ford', mileage: 30000, color: 'Blue', owner: 'Jane' },
//     { model: 'Camry', company: 'Toyota', mileage: 50000, color: 'Red', owner: 'Bob' },
//     { model: 'Accord', company: 'Honda', mileage: 40000, color: 'White', owner: 'Alice' }
//   ];

//   // Insert multiple documents into the car collection
//   carCollection.insertMany(cars, (err, result) => {
//     if (err) throw err;

//     // Query the car collection to find employees with more than a specific salary
//     const minMileage = 50000;
//     carCollection.find({ mileage: { $gt: minMileage } }).toArray((err, docs) => {
//       if (err) throw err;

//       console.log(`Cars with mileage greater than ${minMileage}:`);
//       console.log(docs);

//       // Close the MongoDB connection
//       client.close();
//     });
//   });
// });









// Q. Create a node.js web server application with the HTTP module to find a series of factorial numbers up to a given number. Accept a number from the input text field of the client page and provide the output values as a response with the click event on a button.

// const http = require('http');
// const querystring = require('querystring');

// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>Factorial Calculator</title></head>');
//     res.write('<body>');
//     res.write('<form method="post" action="/calculate">');
//     res.write('<label for="number">Enter a number:</label>');
//     res.write('<input type="text" name="number" id="number">');
//     res.write('<button type="submit">Calculate Factorial</button>');
//     res.write('</form>');
//     res.write('<p id="result"></p>');
//     res.write('<script>');
//     res.write('const form = document.querySelector("form");');
//     res.write('const numberInput = document.getElementById("number");');
//     res.write('const resultParagraph = document.getElementById("result");');
//     res.write('form.addEventListener("submit", event => {');
//     res.write('event.preventDefault();');
//     res.write('const number = numberInput.value;');
//     res.write('const request = new XMLHttpRequest();');
//     res.write('request.onreadystatechange = () => {');
//     res.write('if (request.readyState === 4 && request.status === 200) {');
//     res.write('resultParagraph.textContent = request.responseText;');
//     res.write('}');
//     res.write('};');
//     res.write('request.open("POST", "/calculate");');
//     res.write('request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");');
//     res.write('request.send(`number=${number}`);');
//     res.write('});');
//     res.write('</script>');
//     res.write('</body>');
//     res.write('</html>');
//     return res.end();
//   } else if (req.url === '/calculate' && req.method === 'POST') {
//     let requestBody = '';
//     req.on('data', chunk => {
//       requestBody += chunk.toString();
//     });
//     req.on('end', () => {
//       const { number } = querystring.parse(requestBody);
//       const factorialNumbers = [];
//       for (let i = 0; i <= number; i++) {
//         factorialNumbers.push(factorial(i));
//       }
//       res.setHeader('Content-Type', 'text/plain');
//       res.end(factorialNumbers.toString());
//     });
//   } else {
//     res.statusCode = 404;
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>404 Not Found</title></head>');
//     res.write('<body><h1>404 Not Found</h1></body>');
//     res.write('</html>');
//     return res.end();
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });




// Q. Implement a Node.js application to connect with MongoDB to Create a database and add House collection with the fields- no, rooms, furniture, and rent and Add multiple documents with student data. Finally, Sort (in ascending order) the student details with marks and display them in the console window.

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://sanjayhjp121:sanjay123@cluster0.m37detm.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });

// const houses = [
//   { no: 1, rooms: 2, furniture: 'Sofa', rent: 5000 },
//   { no: 2, rooms: 3, furniture: 'Bed', rent: 8000 },
//   { no: 3, rooms: 1, furniture: 'Chair', rent: 3000 }
// ];

// const students = [
//   { name: 'John', marks: 80 },
//   { name: 'Alice', marks: 90 },
//   { name: 'Bob', marks: 70 }
// ];

// client.connect(err => {
//   const houseCollection = client.db("test").collection("houses");
//   const studentCollection = client.db("test").collection("students");

//   houseCollection.insertMany(houses, (err, result) => {
//     if (err) throw err;
//     console.log(`Inserted ${result.insertedCount} houses`);
//   });

//   studentCollection.insertMany(students, (err, result) => {
//     if (err) throw err;
//     console.log(`Inserted ${result.insertedCount} students`);
//   });

//   studentCollection.find().sort({ marks: 1 }).toArray((err, result) => {
//     if (err) throw err;
//     console.log(result);
//     client.close();
//   });
// });





// Q. Create a node.is web server application with the HTTP module to find a series of Fibonacci numbers up to a given number. Accept a number from the input text field of the client page and provide the output values as a response with the click event on a button.

// const http = require('http');
// const querystring = require('querystring');

// function fibonacci(n) {
//   if (n < 2) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>Fibonacci Calculator</title></head>');
//     res.write('<body>');
//     res.write('<form method="post" action="/calculate">');
//     res.write('<label for="number">Enter a number:</label>');
//     res.write('<input type="text" name="number" id="number">');
//     res.write('<button type="submit">Calculate Fibonacci</button>');
//     res.write('</form>');
//     res.write('</body>');
//     res.write('</html>');
//     return res.end();
//   } else if (req.url === '/calculate' && req.method === 'POST') {
//     let requestBody = '';
//     req.on('data', chunk => {
//       requestBody += chunk.toString();
//     });
//     req.on('end', () => {
//       const { number } = querystring.parse(requestBody);
//       const fibonacciNumbers = [];
//       for (let i = 0; i <= number; i++) {
//         fibonacciNumbers.push(fibonacci(i));
//       }
//       res.setHeader('Content-Type', 'text/plain');
//       res.end(fibonacciNumbers.toString());
//     });
//   } else {
//     res.statusCode = 404;
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>404 Not Found</title></head>');
//     res.write('<body><h1>404 Not Found</h1></body>');
//     res.write('</html>');
//     return res.end();
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });






// // Q. Create a node.js web server application with the HTTP module to produce a series of Armstrong numbers up to a given number. Accept a number from the input text field of the client page and provide the output values as a response with the click event on a button.

// const http = require('http');
// const url = require('url');
// const querystring = require('querystring');

// const port = 3000;

// function isArmstrong(number) {
//   let sum = 0;
//   let numDigits = number.toString().length;

//   let temp = number;
//   while (temp > 0) {
//     let digit = temp % 10;
//     sum += Math.pow(digit, numDigits);
//     temp = Math.floor(temp / 10);
//   }

//   return sum === number;
// }

// function getArmstrongNumbers(maxNumber) {
//   const armstrongNumbers = [];
//   for (let i = 1; i <= maxNumber; i++) {
//     if (isArmstrong(i)) {
//       armstrongNumbers.push(i);
//     }
//   }
//   return armstrongNumbers;
// }

// const server = http.createServer((req, res) => {
//   const { pathname, query } = url.parse(req.url);
//   const params = querystring.parse(query);

//   if (pathname === '/') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(`
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <title>Armstrong Number Finder</title>
//         </head>
//         <body>
//           <h1>Armstrong Number Finder</h1>
//           <form method="GET" action="/armstrong">
//             <label for="maxNumber">Find Armstrong numbers up to:</label>
//             <input type="number" id="maxNumber" name="maxNumber" required>
//             <br><br>
//             <input type="submit" value="Find Armstrong Numbers">
//           </form>
//         </body>
//       </html>
//     `);
//     res.end();
//   } else if (pathname === '/armstrong') {
//     const maxNumber = parseInt(params.maxNumber);
//     const armstrongNumbers = getArmstrongNumbers(maxNumber);

//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(`
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <title>Armstrong Number Finder</title>
//         </head>
//         <body>
//           <h1>Armstrong Number Finder</h1>
//           <p>Armstrong numbers up to ${maxNumber}:</p>
//           <ul>
//     `);

//     armstrongNumbers.forEach((number) => {
//       res.write(`<li>${number}</li>`);
//     });

//     res.write(`
//           </ul>
//         </body>
//       </html>
//     `);
//     res.end();
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.write('404 Not Found\n');
//     res.end();
//   }
// });

// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });








// // Implement a client-server application with the express, HTTP, and socket.io modules to display the student (your) details in the server console after getting a request (connection) from a client. Then Trigger events from the server to display a series of even numbers after every 2 seconds on the client web page. Finally, display Thank you in the server console with the termination of connect from the client.

// const express = require('express');
// const http = require('http');
// const socketIO = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const io = socketIO(server);

// const port = 3000;

// const student = {
//   name: 'Sanjay Kumar',
//   rollNo: '34',
//   department: 'Computer Science',
//   semester: '6th'
// };

// app.get('/', (req, res) => {
//   const html = `
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <title>Even Numbers</title>
//       </head>
//       <body>
//         <h1>Even Numbers</h1>
//         <ul id="evenNumbers"></ul>
//         <script src="/socket.io/socket.io.js"></script>
//         <script>
//           const socket = io();
//           const evenNumbers = document.getElementById('evenNumbers');

//           socket.on('evenNumber', (number) => {
//             const li = document.createElement('li');
//             li.textContent = number;
//             evenNumbers.appendChild(li);
//           });
//         </script>
//       </body>
//     </html>
//   `;
//   res.send(html);
// });

// io.on('connection', (socket) => {
//   console.log('Client connected');

//   // Display student details in server console
//   console.log('Student Details:');
//   console.log(`Name: ${student.name}`);
//   console.log(`Roll No.: ${student.rollNo}`);
//   console.log(`Department: ${student.department}`);
//   console.log(`Semester: ${student.semester}`);

//   // Send even numbers to the client after every 2 seconds
//   let counter = 0;
//   const interval = setInterval(() => {
//     counter += 2;
//     socket.emit('evenNumber', counter);
//   }, 2000);

//   // Disconnect event
//   socket.on('disconnect', () => {
//     console.log('Client disconnected');
//     clearInterval(interval);
//     console.log('Thank you!');
//   });
// });

// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });






// Q. Create a buffer write some data and then read that data and display the content


// // Create a buffer with a specified size
// const bufferSize = 256;
// const buffer = Buffer.alloc(bufferSize);

// // Write some data to the buffer
// const dataToWrite = "Hello, world!";
// const bytesWritten = buffer.write(dataToWrite);

// console.log(`Wrote ${bytesWritten} bytes to the buffer.`);

// // Read the data from the buffer and display the content
// const dataRead = buffer.toString('utf-8', 0, bytesWritten);
// console.log(`Read from buffer: ${dataRead}`);




// Q. Write a program using socket to send “wow server” message from client to the server after ever 2 second but after 12 seconds the client must stop sending this wow server message to the server.AFger waiting for another 5 seconds the client again must start sending the message to the server

// const net = require('net');

// const server = net.createServer((socket) => {
//   console.log('Client connected.');

//   socket.on('data', (data) => {
//     console.log(`Received: ${data}`);
//   });

//   socket.on('end', () => {
//     console.log('Client disconnected.');
//   });
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });




// Q. create a nodejs application that takes a number n as a user Input
// and calculates the sum of n natural numbers and stores the result in a file "result.txt"
// which already exists. Also, "Success" message get printed on console  in case of success and "Error occured"
// gets displayed on console if any error occurs.


// const fs = require('fs');
// const prompt = require('prompt');

// // Start the prompt
// prompt.start();

// // Prompt the user for input
// prompt.get(['Enter a number (n):'], (err, result) => {
//   if (err) {
//     console.error('Error occurred:', err);
//     return;
//   }

//   const n = parseInt(result['Enter a number (n):']);

//   if (isNaN(n)) {
//     console.error('Invalid input. Please enter a number.');
//     return;
//   }

//   // Calculate the sum of n natural numbers
//   const sum = (n * (n + 1)) / 2;

//   // Write the result to 'result.txt'
//   fs.writeFile('result.txt', sum.toString(), (err) => {
//     if (err) {
//       console.error('Error occurred:', err);
//     } else {
//       console.log('Success');
//     }
//   });
// });



// Way 2 :-

// const fs = require('fs');
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // Prompt the user for input
// rl.question('Enter a number (n): ', (input) => {
//   const n = parseInt(input);

//   if (isNaN(n)) {
//     console.error('Invalid input. Please enter a number.');
//     rl.close();
//     return;
//   }

//   // Calculate the sum of n natural numbers
//   const sum = (n * (n + 1)) / 2;

//   // Write the result to the existing 'result.txt'
//   fs.writeFile('result.txt', sum.toString(), (err) => {
//     if (err) {
//       console.error('Error occurred:', err);
//     } else {
//       console.log('Success');
//     }
//     rl.close();
//   });
// });





// using middle ware calculate the square of a number in node js

// const express = require('express');
// const app = express();

// function square(req, res, next) {
//   const number = req.params.number;
//   const squared = Math.pow(number, 2);
//   req.squared = squared;
//   next();
// }

// app.get('/square/:2', square, function(req, res) {
//   res.send('The square of ' + req.params.number + ' is ' + req.squared);
// });

// app.listen(3000, function() {
//   console.log('Server listening on port 3000');
// });