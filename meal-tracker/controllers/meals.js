// const Meal = require('../models/meal');
const User = require('../models/user');

module.exports = {
    new: newMeal,
    create,
    index,
    show
}

function show(req, res){
    // User.findById(req.user.id, function(err, post){
    //     post.findById(req.params.id, function(err, meal) {
    //         res.render('meals/show', {post, meal});
    //         console.log(meal);

    //     })
    // })
    User.findById(req.user.id, function(err, meals){
        res.render('meals/show', {title: 'All Log', meals, id: req.params.id});
        console.log(req.params.id);
    })
}

function index(req, res){
    User.findById(req.user.id, function(err, meals){
        res.render('meals/index', {title: 'All logs', meals});
    })
}

function create(req, res) {
    User.findById(req.user.id, function(err, user) {
        user.post.push(req.body);
        user.save(function(err) {
            res.redirect('/meals');
        })
    })
}

function newMeal(req, res) {
    // console.log(req.user.name);
    res.render('meals/new', {
        details: req.user
    });
}