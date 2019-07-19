var mysql = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'egov'
});

db.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('terkoneksi DATABASE UTAMA');
    }
})


module.exports = db;