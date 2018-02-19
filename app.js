var httpFunctions = require('./http-functions.js');

var requestOptions = {
    host: process.argv[2],
    path: process.argv[3]
};

function printHTML (html) {
  console.log(html);
}

httpFunctions(requestOptions, printHTML)
