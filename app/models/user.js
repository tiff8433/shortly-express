var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  initialize: function(){    
    this.on('creating', function(model, attrs, options){
      var pw = model.get('password');
      bcrypt.hash(pw, null, null, function(err,hash){
        //store hash in password db
        model.set('password', hash);
      });
    });
  }
});

module.exports = User;