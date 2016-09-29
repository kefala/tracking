var express = require('express');
var router = express.Router();
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var config = require('../config/google.js');
var host = (config.env !== 'dev') ? "http://tracking-lobo.herokuapp.com" : "http://tracking-lobo.com:3000";


router.get('/', function(req, res, next) {
	if (req.user) {
		res.setHeader('Content-Type', 'application/json');
    	res.send(JSON.stringify({ a: 1 }, null, 3));
	} else {
		res.send(403);
	}
});


module.exports = router;
