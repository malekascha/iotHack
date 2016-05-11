'use strict'

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(__dirname + "/../client"));

require('./middleware/middleware.js')(app, express);

app.listen(port);
console.log('Server listening on ' + port);