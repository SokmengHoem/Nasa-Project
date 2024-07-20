require('dotenv').config();  // Ensure this is at the top of the file
const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL;

async function mongoConnect() {
  try {
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }
}

async function mongoDisconnect() {
  try {
    await mongoose.disconnect();
    console.log('MongoDB disconnected successfully');
  } catch (err) {
    console.error('Error disconnecting from MongoDB:', err);
  }
}

module.exports = { mongoConnect, mongoDisconnect };
