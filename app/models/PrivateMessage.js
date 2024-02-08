const mongoose = require('mongoose');

const privateMessageSchema = new mongoose.Schema({
  from_user: String,
  to_user: String,
  message: String,
  date_sent: Date,
});

const PrivateMessage = mongoose.model('PrivateMessage', privateMessageSchema);

module.exports = PrivateMessage;
