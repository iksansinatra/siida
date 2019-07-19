const express = require('express');
var db = require('../../db/MySql/web');
const fs = require('fs');

var multer=require("multer");
var upload = require('../../db/multer/pdf');

var uniqid = require('uniqid');
const router = express.Router();

router.get('/', (req, res) => {
    let view = `SELECT proposal.*,
    users.nama as createBy
    FROM proposal 
    JOIN users
    ON proposal.userId = users.id
    ORDER BY proposal.createAt DESC    
    LIMIT 3;
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
    var data_batas = 3;
    var data_star = (req.body.data_ke - 1)* data_batas;
    var cari = req.body.cari_value;
    var halaman = 1; 


    let jml_data = `
        SELECT 
        proposal.*,
        users.nama as createBy
        FROM proposal 
        JOIN users
        ON proposal.userId = users.id 
        WHERE 
        proposal.kepada LIKE '%`+cari+`%' 
        OR proposal.deskripsi LIKE '%`+cari+`%'
    `

    let view = `
        SELECT 
        proposal.*,
        users.nama as createBy
        FROM proposal 
        JOIN users
        ON proposal.userId = users.id 
        WHERE 
        proposal.kepada LIKE '%`+cari+`%' 
        OR proposal.deskripsi LIKE '%`+cari+`%'
        ORDER BY proposal.createAt DESC
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





module.exports = router;