var express = require('express');
var router = express.Router();
const passport = require('passport');
const usersCtrl = require('../controllers/users');


router.get('/new', usersCtrl.new);

module.exports = router;