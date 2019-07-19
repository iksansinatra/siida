const express = require('express');
var db = require('../../db/MySql/web');
const fs = require('fs');

var multer=require("multer");
var upload = require('../../db/multer/pdf');

var uniqid = require('uniqid');
const router = express.Router();

router.get('/', (req, res) => {
    let view = `SELECT * FROM peraturan 
    
    
    `;
     db.query(view, (err, row)=>{
        if(err) {
            res.send(err);
        }else{
            res.send(row);
        }
    })
});

router.post('/views', (req, res) => {
    var data_batas = 10;
    var data_star = (req.body.data_ke - 1)* data_batas;
    var cari = req.body.cari_value;
    var cari_jenis = req.body.cari_jenis;
    var cari_nama = req.body.cari_nama;
    var halaman = 1; 


    let jml_data = `
    SELECT 
    peraturan.*,
    users.nama as createBy
    FROM peraturan 
    JOIN users
    ON peraturan.userId = users.id    
        WHERE 
        (peraturan.nama LIKE '%`+cari+`%' AND peraturan.jenis = '`+cari_jenis+`')


    `

    let view = `
    SELECT 
    peraturan.*,
    users.nama as createBy
    FROM peraturan 
    JOIN users
    ON peraturan.userId = users.id     
        WHERE 
        (peraturan.nama LIKE '%`+cari+`%' AND peraturan.jenis = '`+cari_jenis+`')
        ORDER BY peraturan.tahun DESC
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
     let insert = `INSERT INTO peraturan (id, jenis, nama, file, userId, createAt) 
    VALUES ('`+uniqid()+`' ,'`+req.body.jenis+`' ,'`+req.body.nama+`' ,"`+req.file.filename+`" ,'`+req.user._id+`' , NOW() )
    `

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
        UPDATE peraturan SET
        jenis = '`+req.body.jenis+`',
        nama = '`+req.body.nama+`',
        editeAt =  NOW()
        WHERE id = '`+req.body.id+`'
        `;
    } else {
        query = `
        UPDATE peraturan SET
        jenis = '`+req.body.jenis+`',
        file = '`+req.file.filename+`',
        nama = '`+req.body.nama+`',
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
        DELETE FROM peraturan WHERE id = '`+req.body.id+`'; 
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