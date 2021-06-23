// const Meal = require('../models/meal');
const User = require('../models/user');

module.exports = {
    new: newMeal,
    create,
    index,
    show,
    delete: deleteLog,
    edit,
    update
}


function update(req, res){
    User.findById(req.user.id, function(err, user){
        let incomingId = req.params.id;
        user.post.id(incomingId).remove();
        user.post.push(req.body);
        user.save(function(err) {
            res.redirect('/meals');
        })
    })
}

function edit(req, res){
    User.findById(req.user.id, function(err, log){
        let id = req.params.id;
        for (let entry of log.post){
            if (entry._id == id){
                console.log(entry);
                res.render('meals/edit', {entry, id});
            }
        }
    })
}

function deleteLog(req, res){
    User.findById(req.user.id, function(err, user){
        let incomingId = req.params.id;
        user.post.id(incomingId).remove();
        user.save(function(err) {
            res.redirect('/meals');
        })
    }
)};

//     let incomingId = req.params.id;
//     const postDoc = User.post.id('60d21e8d32d71f4ef1866462');
//     console.log("this is", postDoc);
//     User.findById(req.user.id, function(err, user){
//         res.redirect('/meals');
//     })
// }

function show(req, res){
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