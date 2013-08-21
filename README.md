# easy-mac

Simple [Message Authentication Code](http://en.wikipedia.org/wiki/Message_authentication_code) middleware for your [Connect](http://www.senchalabs.org/connect/)/[Express](http://expressjs.com/) apps in Node.js.

## Usage

```javascript
// ...
var easymac = require('easy-mac');

// FOR CONNECT
var app = connect();
app.use(connect.query());

// OR EXPRESS
var app = express();

var SECRET = 'some secret'; // best to get from `process.env`
var EXPIRES = 600; // seconds
app.use(easymac(SECRET, EXPIRES));

// ...
```

## Resources

* https://github.com/ctalkington/node-archiver/blob/master/examples/pack-zip.js
* http://stackoverflow.com/a/7918435/358804
