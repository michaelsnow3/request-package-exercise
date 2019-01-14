var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function (error) {
    throw error;
  })
  .on('response', function (response){
    console.log(response.statusMessage, response.headers['content-type'])
  })
  .on('end', function () {
    console.log("Downloading image");
  })
  .pipe(fs.createWriteStream('./future.jpg')
    .on('finish', function () {
      console.log("Download complete.");
    })
  );