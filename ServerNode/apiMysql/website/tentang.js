const express = require('express');
var db = require('../../db/MySql/web');
const fs = require('fs');

var multer=require("multer");
var upload = require('../../db/multer/pdf');

var uniqid = require('uniqid');
const router = express.Router();


router.get('/', (req, res) => {
    let view = `
    SELECT 
    tentang.*,
    users.nama as createBy
    FROM tentang 
    JOIN users
    ON tentang.userId = users.id   
    `;
    proses_query(view, res);
});

router.post('/view', (req, res) => {
    var data_batas = 8;
    var data_star = (req.body.data_ke - 1)* data_batas;
    var cari = req.body.cari_value;
    var halaman = 1; 


    let jml_data = `
        SELECT * 
        FROM tentang
        WHERE 
        uraian LIKE '%`+cari+`%' 
    `

    let view = `
        SELECT * 
        FROM tentang 
        WHERE 
        uraian LIKE '%`+cari+`%' 
        ORDER BY createAt DESC
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

router.post('/addData', (req, res)=>{
    var query = `
        INSERT INTO tentang (id, uraian, userId, createAt) VALUES
        ('`+uniqid()+`', '`+req.body.uraian+`', '`+req.user._id+`', NOW())
    `;
    proses_query(query, res);
})

router.post('/editData', (req, res)=>{
    var query = `
        UPDATE tentang SET
        uraian = '`+req.body.uraian+`',
        userId = '`+req.user._id+`',
        editeAt = NOW()
        WHERE id = '`+req.body.id+`'
    `;
    proses_query(query, res);
})

router.post('/removeData', (req, res)=>{
    var query = `
        DELETE FROM tentang
        WHERE id = '`+req.body.id+`' 
    `;
    proses_query(query, res);
})



function proses_query(view, res){
    db.query(view, (err, row)=>{
        if(err) {
            console.log(err);
            res.send(err);
        }else{
            res.send(row);
        }
    })
}


module.exports = router;