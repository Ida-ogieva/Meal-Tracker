var express = require('express');
var router = express.Router();
const passport = require('passport');
const usersCtrl = require('../controllers/users');
const mealsCtrl = require('../controllers/meals');


router.put('/:id', mealsCtrl.update);
router.get('/:id/edit', mealsCtrl.edit);
router.delete('/:id', mealsCtrl.delete);
router.get('/new', mealsCtrl.new);
router.get('/:id', mealsCtrl.show);
router.get('/', mealsCtrl.index);
router.post('/', mealsCtrl.create);


module.exports = router;