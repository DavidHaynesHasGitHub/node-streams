module.exports = function getHTML (options, callback) {

var https = require('https');

var allData = '';
var requestOptions = options;

  https.get(requestOptions, function (response) {

      response.setEncoding('utf8');

      response.on('data', function (data) {
          allData += data + '\n';
        });

        response.on('end', function() {
          callback(allData)
        });
  });
}
