const express = require('express');
var db = require('../../db/MySql/web');
const fs = require('fs');

var multer=require("multer");
var upload = require('../../db/multer/pdf');

var uniqid = require('uniqid');
const router = express.Router();

router.get('/', (req, res) => {
    let view = `SELECT 
    kakaoa.*,
    users.nama as createBy
    FROM kakaoa 
    JOIN users
    ON kakaoa.userId = users.id    
    
    
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
    var data_batas = 6;
    var data_star = (req.body.data_ke - 1)* data_batas;
    var cari = req.body.cari_value;
    var halaman = 1; 


    let jml_data = `
        SELECT 
        kakaoa.*,
        users.nama as createBy
        FROM kakaoa 
        JOIN users
        ON kakaoa.userId = users.id 
        WHERE 
        kakaoa.petani LIKE '%`+cari+`%' 
        OR kakaoa.tahun LIKE '%`+cari+`%'
    `

    let view = `
        SELECT 
        kakaoa.*,
        users.nama as createBy
        FROM kakaoa 
        JOIN users
        ON kakaoa.userId = users.id 
        WHERE 
        kakaoa.petani LIKE '%`+cari+`%' 
        OR kakaoa.tahun LIKE '%`+cari+`%'
        ORDER BY kakaoa.createAt DESC
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

router.post('/addData', (req,res)=>{
     let insert = `INSERT INTO kakaoa (id, petani, pengumpul, daerah, pengencer, minggu, bulan, tahun, userId, createAt) 
    VALUES ('`+uniqid()+`' ,'`+req.body.petani+`' ,'`+req.body.pengumpul+`' ,'`+req.body.daerah+`' ,'`+req.body.pengencer+`',
    '`+req.body.minggu+`', '`+req.body.bulan+`', '`+req.body.tahun+`','`+req.user._id+`' , NOW() )
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

router.post('/editData', (req,res)=>{
    var query = '';
        query = `
        UPDATE kakao SET
        petani = '`+req.body.petani+`',
        pengumpul = '`+req.body.pengumpul+`',
        daerah = '`+req.body.daerah+`',
        pengencer = '`+req.body.pengencer+`',
        minggu = '`+req.body.minggu+`',
        bulan = '`+req.body.bulan+`',
        tahun = '`+req.body.tahun+`',
        editeAt =  NOW()
        WHERE id = '`+req.body.id+`'
        `;    
    db.query(query, (err, row)=>{
        if(err) {
            console.log(err);
            res.send(err);
        }else{
            res.send(row);
        }
    })
    // console.log(req.body);
})


router.post('/removeData', (req, res)=> {
    var query = `
        DELETE FROM kakaoa WHERE id = '`+req.body.id+`'; 
    `;
    db.query(query, (err, row)=>{
        if(err){
            res.send(err);
        }else{
            res.send(row);
        }
    });
})
module.exports = router;