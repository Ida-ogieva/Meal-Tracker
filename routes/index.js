var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/meals/new',
    failureRedirect : '/'
  }
));

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Meal Tracker'});
});

module.exports = router;
