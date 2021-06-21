var express = require('express');
var router = express.Router();
const passport = require('passport');
const usersCtrl = require('../controllers/users');
const mealsCtrl = require('../controllers/meals');


router.post('/', )
router.get('/new', mealsCtrl.new);

module.exports = router;