
const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

async function mongoConnect() {
    try {
        await mongoose.connect(MONGO_URL);
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        // Remove process.exit(1) to avoid terminating Jest process
    }
}

async function mongoDisconnect() {
    try {
        await mongoose.disconnect();
    } catch (err) {
        console.error('Error disconnecting from MongoDB:', err);
    }
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
};
