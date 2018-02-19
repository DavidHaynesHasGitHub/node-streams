var https = require('https');

function getAndPrintHTML(options) {

  var allData = '';
  var requestOptions = options;

    https.get(requestOptions, function (response) {

        response.setEncoding('utf8');

        response.on('data', function (data) {
            allData += data + '\n';
          });

          response.on('end', function() {
            console.log(allData)
            console.log('stream complete');
          });
    });
}

var requestOptions = {
    host: process.argv[2],
    path: process.argv[3]
};

getAndPrintHTML(requestOptions);
