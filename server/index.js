const express = require('express');
const cors = require('cors');
const path = require('path');
const config = require('../config.json');
const routes = require('./routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

if (config.logRequests) {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });
}

// API Routes
app.use('/api', routes);

// Fallback to serving index.html
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

const PORT = process.env.PORT || config.port;
app.listen(PORT, () => {
  console.log(`🚀[${config.appName}] Server running gracefully on port ${PORT}`);
});
