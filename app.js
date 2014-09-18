var express            = require('express');
var app                = express();

//初始化一个假用户
var user               = {};
user.id                = 1;
user.address           = "上海市";
user.company           = "电子工业出版社";
user.email             = "admin@admin.com";
user.name              = "鲁连海";
user.thumbnail         = "";
user.mobile            ="1380000000";
user.fav               =1;
user.msg               =1;
user.role              =1;

//初始化dashboard信息
var dashboard          = {};
dashboard.userTaskNo   = 1;
dashboard.masterTaskNo = 10;
dashboard.editorTaskNo = 10;
dashboard.chiefTaskNo  = 0;


app.post('/user/login',function(request, response){
var username           = request.params("username");
var password           = request.params("password");
if (username           === "admin" && password === "admin") {
response.json(200,user);
} else {
response.json(400,"");
}
});

app.get('/user/dashboard', function(req,res){
var id                 = req.params("id");
if (id                 == 1) {
response.json(200,dashboard);
} else {
response.json(400,"");
}
});
