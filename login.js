module.exports = function ( app ) {
    app.get('/',function(req, res){
        res.render('login');
    });
    app.get('/login',function(req, res){
        res.render('login');
    });
 
    app.post('/login',function(req, res){
        var user={
            username:'admin',
            password:'admin'
        }
        console.log('username = ' + req.body.username);
        console.log('password = ' + req.body.password);
        if(req.body.username==user.username&&req.body.password==user.password){
            req.session.user = user;
            res.sendStatus(200);
        }else{
            console.log("用户名或密码不正确");
            req.session.error = "用户名或密码不正确"
            res.sendStatus(404);
        }
    });
}