var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

 function getAndPrintHTML (response) {

  var allData = ''
  var requestOptions = options

    response.on('data', function(chunk) {

        console.log(chunk.toString());

      });
};

https.request(requestOptions, getAndPrintHTML).end();
