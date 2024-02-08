const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://k1785642492:qazwsxedcrfv1234@cluster0.opca6yz.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB connection string

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(dbURI, options).then(() => {
  console.log('Database connection established!');
},
error => {
  console.log('Database connection error:', error);
});
