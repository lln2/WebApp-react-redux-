//var app = require('koa')();
//var router = require('koa-router')();

var express = require('express')
var path = require('path')
var mongoose = require('mongoose') 
var http = require("http");
var url = require("url");
var _ = require('underscore');
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var app = express()
var dbUrl = 'mongodb://localhost/imooc2'

mongoose.connect(dbUrl)



var Userinit = require('./controllers/user')
var User = mongoose.model('User')
 
 

// router.get('/', function *(next) {
//     this.body = 'hello koa !'
// });

// router.get('/api', function *(next) {
//     this.body = 'test data'
// });

// 首页 —— 广告（超值特惠）
//var homeAdData = require('./home/ad.js')
//router.get('/api/homead', function *(next) {
//  this.body = homeAdData
//});
// 首页 —— 用户数据
//var UserData = require('./home/user.js')
//router.get('/api/userdata', function *(next) {
//  this.body = UserData
//});

 
app.get('/api/users' , function(req ,res){
 
//	res.write("Hello World");
	User.fetch(function(err, users){
        if(err){
            consloe.log(err);
        }
      
         res.send(users);
    });
	
})
app.post('/api/add', urlencodedParser, function (req, res) {
// 	 var response = {
//     "name":req.body.username,
//     "last_name":req.body.last_name
//   }
	 var userObj = req.query.username
	 var _user
    _user = new User({name: req.body.username+Math.random(),  address: req.body.address,   phone: req.body.phone,code:req.body.code,  info:'无'}
        
    )
    var _id = _user.id;
    console.log(_id+"主键"+'地址'+req.body.address)

	_user.save(function(err){
		if(err){
			console.log(err)
		} 
			console.log('保存成功')
		 
		
	})
//    res.send('增');
     res.redirect('/')
     return  res.redirect('/')
   
})
app.get('/api/del', function (req, res) {
	 var id = req.query._id
     console.log("删"+id)
     User.remove({_id:id} , function(err , user){
     	 if (err) {
	        console.log(err)
	        res.json({success: 0})
	      }
	      else {
	        res.json({success: 1})
	      }
     	console.log('删除了')
     	
     })
})
app.get('/api/upd', function (req, res) {
	//  User.findById(_id , function(err , users){
//  	if(err){
//              console.log(err);
//          }
//  	 
//       res.send(users);
//  	
//  })
   res.send('改');
})
 
 

// 开始服务并生成路由
//app.use(router.routes())
// .use(router.allowedMethods());
//app.listen(3000);
app.listen(3000)
 
console.log('port is '+3000)
