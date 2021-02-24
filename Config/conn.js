const mysql = require('mysql');
const express = require('express');


const mysqlConn = mysql.createConnection({

  host:'localhost',
  user:'root',
  password:'',
  database:'icepDB'

})


mysqlConn.connect((err)  =>{

if(!err)

console.log('ICEP database connected');


else


console.log('Failed to connect to ICEP database');


});


module.exports =mysqlConn;
