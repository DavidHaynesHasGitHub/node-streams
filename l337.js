var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function l337(html){
  console.log(html
    .replace(/a/gi, '4')
    .replace(/e/gi, '3')
    .replace(/o/gi, '0')
    .replace(/l/gi, '1')
    .replace(/s/gi, '5')
    .replace(/t/gi, '7')
    .replace(/ck/gi, 'x')
    .replace(/er/gi, '0r')
    .replace(/you/gi, 'j00')
)}

getHTML(requestOptions, l337);
