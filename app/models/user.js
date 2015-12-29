var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  initialize: function(){   
    var that = this; 
    this.on('creating', function(model, attrs, options){
      var pw = model.get('password');
      var hash = bcrypt.hashSync(pw);
      model.set('password', hash);
      // bcrypt.hash(pw, null, null, function(err,hash){
      //   //store hash in password db
      //   console.log(pw);
      //   // console.log(model, 'model')
      //   model.set('password', hash);
      //   // console.log(model, 'aftermodel')
      //   console.log(model === that)
      //   console.log(model.get('password'))
      // });
    });
  }
});

module.exports = User;
