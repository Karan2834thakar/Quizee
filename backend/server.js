// console.log('hello')
const express = require('express');
const path = require('path');
// import express from 'express'
// import path from 'path'
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname,'client', 'dist')));

// Handle all GET requests to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client','dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:${PORT}');
});