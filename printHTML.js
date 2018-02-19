var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


function getHTML (options, callback) {

  https.get(requestOptions, function (response) {

      response.setEncoding('utf8');

      response.on('data', function (data) {
        printHTML(data)
      });
  });
}

function printHTML (html) {
  console.log(html);
}

console.log(getHTML())
