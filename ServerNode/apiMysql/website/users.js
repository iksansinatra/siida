const express = require('express');
var db = require('../../db/MySql/web');

var multer=require("multer");
var upload = require('../../db/multer/pdf');

var uniqid = require('uniqid');
const router = express.Router();

router.get('/', (req, res) => {
    let view = `SELECT 
    id,
    nama,
    email,
    lembaga,
    username,
    status,
    createAt,
    editeAt FROM users `;
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
    SELECT * 
    FROM users
    WHERE 
    username LIKE '%`+cari+`%' 
    OR email LIKE '%`+cari+`%'
    `

    let view = `
        SELECT 
        id,
        nama,
        email,
        lembaga,
        username,
        status,
        createAt,
        editeAt
        
        FROM users
        WHERE 
        username LIKE '%`+cari+`%' 
        OR email LIKE '%`+cari+`%'
        ORDER BY createAt DESC
        LIMIT `+data_star+`,`+data_batas+`
    `;
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



router.post('/removeData', (req, res)=> {
    var query = `
        DELETE FROM users WHERE id = '`+req.body.id+`'; 
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