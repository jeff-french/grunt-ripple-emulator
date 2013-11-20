'use strict';

var http = require('http');

module.exports = function get(url, callback, error) {
    var req = http.get(url, function(res) {
        var body = '';

        res.on('data', function(chunk) {
            body += chunk;
        }).on('end', function() {
                callback(res, body);
            });
    });

    if (error) {
        req.on('error', error)
    };

    req.end();
}