const express = require('express');
const favicon = require('express-favicon');
require('dotenv').config();

const path = require('path');
const port = process.env.PORT || 3000;
console.log('Consola puerto');
const app = express();
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(3000);

server.listen(port, () => {
    console.log("App is running on port " + port);
});
console.log('Consola puerto', port);