const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealSchema = new Schema ({
    breakfast: {
        type: String,
        require: true
    },
    lunch: {
        type: String,
        require: true
    },
    dinner: {
        type: String,
        require: true
    },
    other: String,
    date: Date
})

const userSchema = new Schema ({
    name: String,
    email: String,
    googleId: String,
    post: [mealSchema]
})

module.exports = mongoose.model('User', userSchema);