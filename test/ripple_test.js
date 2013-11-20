'use strict';

var get = require('./lib/get');

exports.ripple = {
  serves_static_file_from_custom_dir: function(test) {
    test.expect(2);

    get('http://localhost:4400/testing.html', function(res, body){
        test.equal(res.statusCode, 200, 'should return 200');
        test.equal(body, 'Testing', 'should return static page');
        test.done();
    }, function(err){
        test.done();
    });
  },
  start_xhr_proxy_server: function(test){
      test.expect(2);

      get('http://localhost:4400/ripple/xhr_proxy', function(res, body){
          test.equal(res.statusCode, 200, 'should return 200');
          test.equal(body, 'You shall not pass!');
          test.done();
      });
  },
    start_jsonp_xhr_proxy_server: function(test){
        test.expect(2);

        get('http://localhost:4400/ripple/jsonp_xhr_proxy', function(res, body){
            test.equal(res.statusCode, 200, 'should return 200');
            test.equal(body, 'You shall not pass!');
            test.done();
        });
    }
};
