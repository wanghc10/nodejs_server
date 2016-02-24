var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var session = require('express-session');
var port = 8000;

app.set('views', './views');

app.set('view engine', 'html' );
app.engine( '.html', require( 'ejs' ).__express );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*10  //过期时间设置(单位毫秒)
    }
}));

app.use(function(req, res, next){
    res.locals.user = req.session.user;
    var err = req.session.error;
    res.locals.message = '';
    if (err) res.locals.message = '<div style="margin-bottom: 20px;color:red;">' + err + '</div>';
    next();
});

require('./login')(app);
require('./home')(app);
require('./logout')(app);

var server = app.listen(port, function(){
    var host = server.address().address;
    var post = server.address().port;
    // console.log('client '+host+': '+ post);
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});

console.log('Node.js server open at port [' + port + ']');