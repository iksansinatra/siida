
const monk = require('monk');
const db = monk ('localhost:27017/bhumie');

db.options = { 
    safe    : true,
    castIds : false
  };

module.exports = db;

