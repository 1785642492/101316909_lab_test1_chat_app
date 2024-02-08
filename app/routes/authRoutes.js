const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
  try {
    const { username, firstname, lastname, password } = req.body;
    const user = new User({ username, firstname, lastname, password });
    await user.save();
    res.status(201).send('User created successfully');
  } catch (error) {
    res.status(400).send(error);
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send('User not found');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Invalid credentials');
    }
    // Set user session
    req.session.user = user;
    res.send('Login successful');
  } catch (error) {
    res.status(500).send(error);
  }
});

// Logout route
router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.send('Logged out successfully');
  });
});

module.exports = router;
