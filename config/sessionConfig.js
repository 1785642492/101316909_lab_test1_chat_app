const session = require('express-session');
const MongoStore = require('connect-mongo');

module.exports = session({
  secret: 'your_secret_key', // Replace with your own secret key
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: 'mongodb+srv://k1785642492:qazwsxedcrfv1234@cluster0.opca6yz.mongodb.net/?retryWrites=true&w=majority' }), // Use the same MongoDB connection string
  cookie: { maxAge: 24 * 60 * 60 * 1000 } // Session expires in 24 hours
});
