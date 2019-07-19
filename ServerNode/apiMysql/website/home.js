const express = require('express');
var db = require('../../../db/MySql/web');
const fs = require('fs');

var multer=require("multer");
var upload = require('../../../db/multer/pdf');

var uniqid = require('uniqid');
const router = express.Router();

// router.get('/', (req, res) => {
//     let view = `SELECT 
//     sambutan.*,
//     users.nama as createBy
//     FROM sambutan 
//     JOIN users
//     ON sambutan.userId = users.id   
//     ORDER BY sambutan.createAt DESC
//     LIMIT 1
    
//     `;
//      db.query(view, (err, row)=>{
//         if(err) {
//             res.send(err);
//         }else{
//             res.send(row);
//         }
//     })
// });

router.get('/', (req, res) => {
    let view = `
        SELECT * 
        FROM home
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
        FROM home
        WHERE 
        uraian LIKE '%`+cari+`%' 
    `

    let view = `
        SELECT * 
        FROM home 
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

router.post('/addData',upload.single("file"), (req,res)=>{
    var insert = '';

    if (req.file == undefined) {
        insert = `INSERT INTO home (id, youtube, uraian, file, userId, createAt) 
        VALUES ('`+uniqid()+`' ,'`+req.body.youtube+`' ,'`+req.body.uraian+`' ,'','`+req.user._id+`' , NOW() )
        `;
    } else {
        insert = `INSERT INTO home (id, youtube, uraian, file, userId, createAt) 
        VALUES ('`+uniqid()+`' ,'`+req.body.youtube+`' ,'`+req.body.uraian+`' ,"`+req.file.filename+`" ,'`+req.user._id+`' , NOW() )
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
        UPDATE home SET
        youtube = '`+req.body.youtube+`',
        uraian = '`+req.body.uraian+`',
        editeAt =  NOW()
        WHERE id = '`+req.body.id+`'
        `;
    } else {
        query = `
        UPDATE home SET
        youtube = '`+req.body.youtube+`',
        uraian = '`+req.body.uraian+`',
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

router.post('/removeData', (req, res)=>{
    var query = `
        DELETE FROM home
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