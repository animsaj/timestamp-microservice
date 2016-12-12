var http = require('http');
var fs = require('fs');
var moment = require('moment');

http.createServer(function(request, response) {
   if (request.url === '/') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('index.html').pipe(response);
    } else {
        var url = request.url.substr(1);
        var responseBody = {};
        //if parameter is Date in natural form and is not February 29 in non-leap year
        //is Valid() is moment library function
        if ((new Date(decodeURI(url))).getTime() > 0 && moment(decodeURI(url), 'LL').isValid()) {
            responseBody.natural = decodeURI(url);
            responseBody.unix = moment(decodeURI(url), 'LL').valueOf() / 1000;
        } 
        //if parameter is Date in unix form
        else if ((new Date(decodeURI(url) * 1000)).getTime() > 0) {
            responseBody.natural = moment(decodeURI(url) * 1000).format('LL');
            responseBody.unix = parseInt(decodeURI(url));
        } 
        //if parameter is not Date at all
        else {
            responseBody.natural = null;
            responseBody.unix = null;
        }
        response.end(JSON.stringify(responseBody));
    } 
  
  
}).listen(process.env.PORT || 8080);