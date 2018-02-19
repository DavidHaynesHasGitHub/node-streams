var https = require('https');

function getAndPrintHTMLChunks () {

  var allData = ''

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

    https.get(requestOptions, function (response) {

        response.setEncoding('utf8');

        response.on('data', function (data) {
            allData += data;
          });

          response.on('end', function() {
            console.log(allData)
            console.log('stream complete');
          });
    });
}

console.log(getAndPrintHTMLChunks());
