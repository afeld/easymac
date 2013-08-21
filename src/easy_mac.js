var crypto = require('crypto');

module.exports = function(secret, expires){
  var isValid = function(authHash, time){
    var sig = secret + "\n" + time;
    var generated = crypto.createHash('md5').update(sig).digest('hex');
    return generated === authHash;
  };

  var isExpired = function(time){
    var expiresAt = (Date.now() / 1000) - expires;
    return time < expiresAt;
  };

  return function(req, res, next){
    var authHash = req.query.auth_hash;
    var time = req.query.time;
    if (!authHash || !time){
      res.send(400, "Query parameters 'auth_hash' and 'time' required.");
    } else {
      var timeInt = parseInt(time, 10);
      if (isValid(authHash, timeInt)){
        if (isExpired(timeInt)){
          res.send(403, "Sorry, your auth_hash has expired.");
        } else {
          // success!
          next();
        }
      } else {
        res.send(403, "Sorry, your auth_hash is incorrect.");
      }
    }
  };
};
