const express = require('express');
const route=express.Router();
const mysqlConn= require('../config/conn');

route.get('/profile/:studentNumber', (req, res) => {

    mysqlConn.query('SELECT * FROM applicant WHERE studentNumber = ?', [req.params.studentNumber], (err, rows) => {
        if(err){
            throw err
          }else{
            console.log(rows);
            return res.send(rows);  
          }
    });
    
  })

module.exports=route;