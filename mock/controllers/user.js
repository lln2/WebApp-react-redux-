var Userinit = require('../models/user')
var mongoose = require('mongoose')
var User = mongoose.model('User')
var _ = require('underscore')
 

 
 
  
// userlist page
exports.list = function(req, res) {
  User.fetch(function(err, users) {
    if (err) {
      console.log(err)
    }
		
    return users
  })
}
  
 

// admin new page
exports.new = function() {
	var newUser = {
		name: '神下余烬6',
        address: '冰冻的艾尔维尼亚',
        phone: '18069788087',
        info:'无',
        code:'130000'
	}
	_user = new User(newUser)
	_user.save(function(err){
		if(err){
			console.log(err)
		}
		console.log('保存成功')
	})
   
}

// admin update page
exports.update = function(req, res) {
  var id = req.params.id

  if (id) {
    User.findById(id, function(err, User) {      
        return User  
    })
  }
}

// list page
exports.del = function(req, res) {
  var id = req.query.id

  if (id) {
    User.remove({_id: id}, function(err, User) {
      if (err) {
        console.log(err)
        res.json({success: 0})
      }
      else {
        res.json({success: 1})
      }
    })
  }
}

// admin post movie
exports.save = function(req, res) {
  var id = req.body.movie._id	
  var movieObj = req.body.User
  var _movie
   
  if (id) {
    User.findById(id, function(err, User) {
      if (err) {
        console.log(err)
      }

      _movie = _.extend(User, movieObj)
      _movie.save(function(err, User) {
        if (err) {
          console.log(err)
        }

        return User
      })
    })
  }
  else {
    _movie = new Movie(movieObj)
 
    _movie.save(function(err, User) {
      if (err) {
        console.log(err)
      }
      return User
    })
  }
}
