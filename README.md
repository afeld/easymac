# easymac

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

## Thanks

Thanks to [George Mike](https://plus.google.com/112988246669710967205/posts) for referring me to [this Stack Overflow question](http://stackoverflow.com/a/7918435/358804), which gave a lot of clarity about how to do this.
