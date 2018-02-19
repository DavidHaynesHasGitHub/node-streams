var https = require('https');

var requestOptions = {
  host: 'example.com',
  path: '/'
};

getAndPrintHTMLChunks(response){

  response.on('data', function(){
    console.log('end of stream')
  })
  response.setEncoding('utf8');
    console.log(response)
  })

  response.on('end', function(){
    console.log('end of stream')
  })
}

https.request(requestOptions, getAndPrintHTMLChunks(response))
