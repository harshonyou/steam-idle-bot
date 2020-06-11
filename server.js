var http = require('http');  
var url = require('url');  
var fs = require('fs'); 

const steamUser = require("steam-user");
const steamTotp = require("steam-totp");

var url;
var arr;


var print = require("./print");



var server = http.createServer(function(request, response) {

    //console.log("Reques was made: " + request.url);

    url = (request.url).slice(1);
    arr = url.split("/");
    if( arr[0] === "login" && arr.length === 4) {
        global.id = arr[1];
        global.hash = arr[2];
        global.pass = arr[3];
        if(hash=="")
        var login = require('./login_wh');
        else
        var login = require('./login');
    }
    if( arr[0] === "register" && arr.length === 5) {
      global.STEAMid = arr[1];
      global.STEAMdefault = arr[2];
      global.STEAMgames = arr[3];
      global.STEAMmessage = arr[4];
      var login = require('./register');
    }

    if(request.url === "/"){
      fs.readFile("./index.html", function (err, data) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data);
      response.end();
       });
    }
    if(request.url === "/logged.html"){
      fs.readFile("./logged.html", function (err, data) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data);
      response.end();
       });
    }
    if(request.url === "/script.js"){
        fs.readFile("./script.js", function (err, data) {
        response.writeHead(200, {'Content-Type': 'text/js'});
        response.write(data);
        response.end();
         });
    }
    //http://localhost:8082/new_user
    if(request.url === "/style.css"){
        fs.readFile("./style.css", function (err, data) {
        response.writeHead(200, {'Content-Type': 'text/css'});
        response.write(data);
        response.end();
         });
    }
    if(request.url === "/favicon.png"){
      fs.readFile("./favicon.png", function (err, data) {
      response.writeHead(200, {'Content-Type': 'image/png'});
      response.write(data);
      response.end();
       });
  }
    if(request.url === "/new_user"){
      fs.readFile("./new_user.html", function (err, data) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data);
      response.end();
       });
  }

 
});
server.listen(8082);