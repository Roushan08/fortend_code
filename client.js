var http = require('http');

var options = {
	host: '192.168.3.225',
	port: '9000',
	path: '/position.txt'
}

var callback = function(response){

var body = '';
response.on('data', function(data){
	body += data;
});
response.on('end', function(){
console.log(body);
});
}

var req = http.request(options, callback);
req.end();
