const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to my homepage!');
});

app.get('/about', (req, res) => {
  res.send('Hello Sarah From Jacob!');
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).send('Error 404: Not Found');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
