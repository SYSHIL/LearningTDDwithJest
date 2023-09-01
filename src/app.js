const express = require('express');
const mathRouter = require('./routes/math')
const app = express();
const port = 3000; // You can change this to your desired port number

// Middleware to parse JSON requests
app.use(express.json());

// Middleware for handling URL-encoded form data
app.use(express.urlencoded({ extended: false }));
app.use(mathRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
