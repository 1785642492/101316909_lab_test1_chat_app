const mongoose = require('mongoose');
const User = require('../app/models/user');
const GroupMessage = require('../app/models/message');
const PrivateMessage = require('../app/models/PrivateMessage');

// MongoDB connection string
const dbURI = 'mongodb+srv://k1785642492:qazwsxedcrfv1234@cluster0.opca6yz.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

async function insertSampleData() {
  try {
    // Insert user
    const user = new User({
      username: 'pritamworld',
      firstname: 'pritesh',
      lastname: 'Patel',
      password: 'What about covid19 vaccine?', // You should hash the password in a real application
      createon: new Date('2022-01-28T18:30:00')
    });
    await user.save();

    // Insert group message
    const groupMessage = new GroupMessage({
      from_user: 'pritamworld',
      room: 'covid19',
      message: 'What about covid19 vaccine?',
      date_sent: new Date('2021-01-28T18:30:00')
    });
    await groupMessage.save();

    // Insert private message
    const privateMessage = new PrivateMessage({
      from_user: 'pritamworld',
      to_user: 'moxdroid',
      message: 'What about covid19 vaccine?',
      date_sent: new Date('2021-01-28T18:30:00')
    });
    await privateMessage.save();

    console.log('Sample data inserted successfully');
  } catch (error) {
    console.error('Failed to insert sample data:', error);
  } finally {
    // Close the connection to the database
    mongoose.connection.close();
  }
}

insertSampleData();
