var mongoose = require('mongoose')
 

var UserSchema = new mongoose.Schema({
  name: {
    unique: true,
    type: String
  },
  phone: String,
  address:String,
  info:{
  	type:String,
  	default:'无'
  },
  code: {
    type: Number,
    default: 13000
  },
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
})

UserSchema.pre('save', function(next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  }
  else {
    this.meta.updateAt = Date.now()
  }
  next()
 
 
})

 

UserSchema.statics = {
  fetch: function(cb) {
    return this
      .find({})
   	  .sort('meta.updateAt')
      .exec(cb)
  },
  findById: function(id, cb) {
    return this
      .findOne({_id: id})
      .exec(cb)
  }
}

module.exports = UserSchema