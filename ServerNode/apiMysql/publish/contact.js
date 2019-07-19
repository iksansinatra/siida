const express = require('express');
var db = require('../../db/MySql/web');
const fs = require('fs');

var multer=require("multer");
var upload = require('../../db/multer/pdf');

var uniqid = require('uniqid');
const router = express.Router();

router.post('/addData',upload.single("foto"), (req,res)=>{
    let insert = `INSERT INTO contact (id, nama, email, subject, pesan, createAt) 
   VALUES ('`+uniqid()+`' ,'`+req.body.nama+`' ,'`+req.body.email+`' ,"`+req.body.subject+`" ,"`+req.body.subject+`", NOW() )
   
   `

   db.query(insert, (err, row)=>{
       if(err) {
           console.log(err);
           res.send(err);
       }else{
           res.send(row);
       }
   })
})

module.exports = router;