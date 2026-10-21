const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

function sum(a, b) {
  return a + b;
}

module.exports = { app, sum };
