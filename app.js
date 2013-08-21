var crypto = require('crypto');
var express = require('express');
var app = express();

var secret = 'secure';
var expires = 10; // 3600; // one hour

app.get('/', function(req, res){
  var time = parseInt(req.query.time, 10);
  if (time > ((Date.now() / 1000) - expires)){
    var sig = secret + "\n" + time;
    var generated = crypto.createHash('md5').update(sig).digest('hex');
    if (generated === req.query.auth_hash){
      res.send('succeeded');
    } else {
      res.send('failed');
    }
  } else {
    res.send('expired');
  }
});

app.listen(3000);
