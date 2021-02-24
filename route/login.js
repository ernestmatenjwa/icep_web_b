var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
const jwt = require('jsonwebtoken')
const router = express.Router();
const bodyParser = require('body-parser');
const mysqlConn= require('../config/conn');


/*
router.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));*/
//router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());

router.post('/login', (req, res) => {

const [{email, password, studentNumber}] = req.body 

		mysqlConn.query('SELECT * FROM applicant WHERE email = ? AND password = ?', [email , password], (err, results) => {
			console.log(results) 
			if (err) throw err 
			if (results.length>0) {
				jwt.sign({studentNumber}, 'secret', { expiresIn: '60s' }, (err, token) => { 
					if (err) throw err
					res.json({  
						token, results         
					});
				  });
				 // redirect: /profile/:studentNumber'

			} else {
				console.log('Email or password is incorrect'); 
				return res.send('Email or password is incorrect');
			}	
		})
	
});

router.get('/logout', (req, res) => {
	req.logout();
	req.flash('success_msg', 'You are logged out');
	res.redirect('/login');
  });


module.exports = router;