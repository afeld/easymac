var connect = require('connect');
var supertest = require('supertest');

var easymac = require('../src/easy_mac');

describe('easy_mac', function(){
  it("should fail if the time is missing", function(){
    var app = connect();
    app.use(easymac('secure', 10));
    app.use(function(req, res){
      res.end('success');
    });

    supertest(app)
      .get('/')
      .expect(400);
  });
});
