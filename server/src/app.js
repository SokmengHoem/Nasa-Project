const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const api = require('./api')

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization']  // additional headers you want to allow
}));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname,'..', 'public')));  // serve static files from public folder
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'..','public', 'index.html'));
})

app.use('/v1', api)
app.get('/*', (req, res) => {
    res.send(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;