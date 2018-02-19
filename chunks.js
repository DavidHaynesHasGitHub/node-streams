var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};


var getAndPrintHTMLChunks = function (response) {

    response.on('data', function(chunk) {

        console.log(chunk.toString());

      });
};

https.request(requestOptions, getAndPrintHTMLChunks).end();
