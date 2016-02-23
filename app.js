var express = require("express");
var app = express();
var path = require("path");

var port = 8000;
// var port = process.env.PORT || 8000;

app.set('views', './views');
 
app.set( 'view engine', 'html' );
app.engine( '.html', require( 'ejs' ).__express );
 
app.get('/', function(req, res) {
    res.render('index');
});
    
app.get('/login',function(req,res){
    res.render('login');
});
 
app.get('/home',function(req,res){
    res.render('home');
});
// app.get('/index.html', function (req, res) {
//     res.redirect("http://www.baidu.com");   //重定向网页
// //   res.sendFile( __dirname + "/views/" + "index.html" );
// })

var server = app.listen(port, function(){
    var host = server.address().address;
    var post = server.address().port;
    console.log('client '+host+': '+ post);
});

console.log('Node.js server open at [' + port + ']');