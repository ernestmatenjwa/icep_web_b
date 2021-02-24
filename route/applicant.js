const express = require('express');
const route=express.Router();
const mysqlConn= require('../config/conn');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs')
const bodyParser = require('body-parser');
var mysql = require('mysql');

route.use(bodyParser.json());

//Register student
route.post('/register', (req, res) => {
  
  let post = {studentNumber:req.body.studentNumber, firstName:req.body.firstName, lastName:req.body.lastName, idNumber:req.body.idNumber,email:req.body.email, address:req.body.address, contactNumber:req.body.contactNumber, password:req.body.password, specialization:req.body.specialization} ;
  //var email = req.body.email;
  console.log(post);
 

  mysqlConn.query('INSERT INTO applicant SET ?', [post], function(err, results) {
    if(err){
      throw err
    }else{
     
      res.send({data: req.body,msg:"successfully registered"});
      res.end();  
    };
 
  })
});
  

route.post('/artisan', function (req, res) {
  let post = {studentNumber:req.body.studentNumber, firstName:req.body.firstName,
     lastName:req.body.lastName, idNumber:req.body.idNumber,email:req.body.email,
      address:req.body.address, contactNumber:req.body.contactNumber,
       password:req.body.password, specialization:req.body.specialization} ;
  
 

  
  
  mysqlConn.query("INSERT INTO applicant SET ? ",[post], function (error, results, fields) {
if (error) throw error;
  // 
  return res.send({  data: results, message: 'New user has been created successfully.' });
  });
});


/*
//students apdate his details    
route.put('/applicant/update', function(req, res) {

    const {fname, lname, gender, email, contactno, student_id} = req.body

    mysqlConn.query('UPDATE students SET fname = ?, lname = ?, gender = ?, email = ?, contactno = ? WHERE student_id = ?', [fname, lname, gender, email, contactno, student_id], (err, rows) =>{

      if(!err){
        res.send('Details updated.') 
      }else{
        console.log(err)
      }
    })
    console.log(req.body)
   
})
*/
module.exports=route;