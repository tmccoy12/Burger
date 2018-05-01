// Require modules and packages
var orm = require('../config/orm.js');

var foods = {
  all: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  add: function(cols, vals, cb) {
    // table_name, [burger_name, devoured], [forminput1, forminput2], callback
    orm.add("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burger", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete('burger',condition, function(res) {
      cb(res);
    });
  }
};

module.exports = foods;
