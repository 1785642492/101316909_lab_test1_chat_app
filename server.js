const express = require('express');
const bodyParser = require('body-parser');
const session = require('./config/sessionConfig');
const db = require('./config/db'); // This ensures the MongoDB connection is established
const authRoutes = require('./app/routes/authRoutes');
// const chatRoutes = require('./app/routes/chatRoutes'); // Commented out until implemented
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON and urlencoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Session configuration
app.use(session);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes for authentication
app.use('/api/auth', authRoutes);

// Chat-related routes (if applicable)
// app.use('/api/chat', chatRoutes); // Commented out until implemented

// Serve HTML files or templates
// Main or login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Signup page
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'signup.html'));
});

// Chat interface
app.get('/chat', (req, res) => {
  // You might want to add an authentication check here
  res.sendFile(path.join(__dirname, 'views', 'chat.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
