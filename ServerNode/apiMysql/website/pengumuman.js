const express = require('express');
var db = require('../../db/MySql/web');
const fs = require('fs');

var multer=require("multer");
var upload = require('../../db/multer/pdf');

var uniqid = require('uniqid');
const router = express.Router();

router.get('/', (req, res) => {
    let view = `SELECT 
    pengumuman.*,
    users.nama as createBy
    FROM pengumuman 
    JOIN users
    ON pengumuman.userId = users.id    
    
    
    `;
     db.query(view, (err, row)=>{
        if(err) {
            res.send(err);
        }else{
            res.send(row);
        }
    })
});

router.post('/view', (req, res) => {
    var data_batas = 8;
    var data_star = (req.body.data_ke - 1)* data_batas;
    var cari = req.body.cari_value;
    var halaman = 1; 


    let jml_data = `
        SELECT 
        pengumuman.*,
        users.nama as createBy
        FROM pengumuman 
        JOIN users
        ON pengumuman.userId = users.id  
        WHERE 
        pengumuman.judul LIKE '%`+cari+`%' 
        OR pengumuman.isi LIKE '%`+cari+`%'
    `

    let view = `
        SELECT 
        pengumuman.*,
        users.nama as createBy
        FROM pengumuman 
        JOIN users
        ON pengumuman.userId = users.id  
        WHERE 
        pengumuman.judul LIKE '%`+cari+`%' 
        OR pengumuman.isi LIKE '%`+cari+`%'
        ORDER BY pengumuman.createAt DESC
        LIMIT `+data_star+`,`+data_batas+`
    `
    db.query(jml_data, (err, row)=>{
        if (err) {
            res.json(err)
        }else{
            halaman = Math.ceil(row.length/data_batas);
            if(halaman<1){halaman = 1}
            // ========================
            db.query(view, (err, result)=>{
                if (err) {res.json(err)}
                else{
                    halaman = Math.ceil(row.length/data_batas);
                    if(halaman<1){halaman = 1}
                    res.json({
                        data : result,
                        jml_data : halaman
                    })
                }
            })
            // ========================

        }
    })
});


// router.post('/addData', (req,res)=>{

router.post('/addData',upload.single("file"), (req,res)=>{
    var insert = '';

    if (req.file == undefined) {
        insert = `INSERT INTO pengumuman (id, judul, isi, file, userId, createAt) 
        VALUES ('`+uniqid()+`' ,'`+req.body.judul+`' ,'`+req.body.isi+`' ,'','`+req.user._id+`' , NOW() )
        `;
    } else {
        insert = `INSERT INTO pengumuman (id, judul, isi, file, userId, createAt) 
        VALUES ('`+uniqid()+`' ,'`+req.body.judul+`' ,'`+req.body.isi+`' ,"`+req.file.filename+`" ,'`+req.user._id+`' , NOW() )
        `;
        
        hapus_file(req.body.file_old);
        console.log(req.body.file_old);
    }

    db.query(insert, (err, row)=>{
        if(err) {
            console.log(err);
            res.send(err);
        }else{
            res.send(row);
        }
    })
    // console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
});

router.post('/editData',upload.single("file"), (req,res)=>{
    var query = '';
    if (req.file == undefined) {
        query = `
        UPDATE pengumuman SET
        judul = '`+req.body.judul+`',
        isi = '`+req.body.isi+`',
        editeAt =  NOW()
        WHERE id = '`+req.body.id+`'
        `;
    } else {
        query = `
        UPDATE pengumuman SET
        judul = '`+req.body.judul+`',
        isi = '`+req.body.isi+`',
        file = '`+req.file.filename+`',
        editeAt =  NOW()
        WHERE id = '`+req.body.id+`'
        `;
        
        hapus_file(req.body.file_old);
        console.log(req.body.file_old);
    }
    
    db.query(query, (err, row)=>{
        if(err) {
            console.log(err);
            res.send(err);
        }else{
            res.send(row);
        }
    })


    // console.log(req.body);
    

    // console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
})


router.post('/removeData', (req, res)=> {
    var file = req.body.file
    hapus_file(file);

    var query = `
        DELETE FROM pengumuman WHERE id = '`+req.body.id+`'; 
    `;
    db.query(query, (err, row)=>{
        if(err){
            res.send(err);
        }else{
            res.send(row);
        }
    });
})


function hapus_file(file){
    const path = 'uploads/'+file;

    fs.unlink(path, (err) => {
        if (err) {
          console.error(err)
          return
        }
    })

}




module.exports = router;