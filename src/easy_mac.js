var crypto = require('crypto');

module.exports = function(secret, expires){
  return function(req, res, next){
    var auth_hash = req.query.auth_hash;
    var time = req.query.time;
    if (!auth_hash || !time){
      res.send(400, "Query parameters 'auth_hash' and 'time' required.");
    } else {
      var timeInt = parseInt(time, 10);
      var sig = secret + "\n" + timeInt;
      var generated = crypto.createHash('md5').update(sig).digest('hex');
      if (generated === auth_hash){
        if (timeInt > ((Date.now() / 1000) - expires)){
          // success!
          next();
        } else {
          res.send(403, "Sorry, your auth_hash has expired.");
        }
      } else {
        res.send(403, "Sorry, your auth_hash is incorrect.");
      }
    }
  };
};
