//create an app server
var express = require('express');
var app = express.createServer();
//set path to the views (template) directory
app.set('views', __dirname + '/views');
//handle GET requests on /
app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
});
 app.get('/hello', function(req, res){
    res.sendfile(__dirname + '/hello-world.html');
});
 
 
 app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/js'));
  app.use(express.errorHandler({
    dumpExceptions: true, 
    showStack: true
  }));
  app.use(app.router);
});
var port = (process.env.PORT || 3000);
app.listen(port,null);
