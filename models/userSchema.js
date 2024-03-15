const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    email: String,
    username: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
    age: Number,
    country: String,
    gender: String,
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);