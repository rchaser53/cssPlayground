const express = require('express')
const http = require('http')

const app = express()

app.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.send('value')
});

http.createServer(app)
    .listen(3000, () => {
        console.log('Node app is running on port', 3000);
    });