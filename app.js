var http = require('http');
//var socketio = require('socket.io');
      fs =require('fs');　//ファイルシステムモジュールの読み込み
var server = http.createServer();

server.on('request', html);
server.listen(3000);



function html(req, res) {
  	var url = req.url;

    if ('/' == url) {
        fs.readFile('./a.html', 'UTF-8', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else if ('/a.js' == url) {
        fs.readFile('./a.js', 'UTF-8', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(data);
            res.end();
        });
    } else if ('/jq.js' == url) {
        fs.readFile('./jq.js', 'UTF-8', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(data);
            res.end();
        });
    }  else{
        ;
    }
	console.log(url);
}




