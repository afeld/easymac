var express = require('express');
var easymac = require('./src/easy_mac');

var app = express();
app.use(easymac('secure', 600)); // ten minutes

app.get('/', function(req, res){
  res.send('HOORAY!');
});

app.listen(3000);
